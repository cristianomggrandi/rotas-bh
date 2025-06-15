import { useRouter } from "expo-router"
import { useState } from "react"
import { Button, FlatList, Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native"
import { searchWithText } from "../util/services"

export default function Index() {
    const router = useRouter()

    const [search, setSearch] = useState("")
    const [focusedInput, setFocusedInput] = useState("inicio")
    const [inicio, setInicio] = useState("")
    const [inicioCoordinates, setInicioCoordinates] = useState<number[]>()
    const [fim, setFim] = useState("")
    const [fimCoordinates, setFimCoordinates] = useState<number[]>()
    const [searchOptions, setSearchOptions] = useState<any[]>([])

    const [priorizarElevacao, setPriorizarElevacao] = useState(false)
    const [priorizarIluminacao, setPriorizarIluminacao] = useState(false)
    const [priorizarPavimentacao, setPriorizarPavimentacao] = useState(false)

    return (
        <View style={styles.page}>
            {inicio ? <Text>Partida: {inicio}</Text> : null}
            {fim ? <Text>Destino: {fim}</Text> : null}

            {!fim ? <TextInput style={styles.input} value={search} onChangeText={setSearch} placeholder="" /> : null}

            {inicio && fim ? (
                <Button
                    title="Ver rota"
                    onPress={() => {
                        router.push({
                            pathname: "/directions",
                            params: {
                                start: inicioCoordinates?.join(","),
                                end: fimCoordinates?.join(","),
                            },
                        })
                    }}
                />
            ) : (
                <Button
                    onPress={async () => {
                        const response = await searchWithText(search)

                        setSearchOptions(response.features)
                    }}
                    title="Buscar"
                />
            )}

            <Button
                title="Limpar"
                onPress={() => {
                    setSearch("")
                    setSearchOptions([])
                    setInicio("")
                    setFim("")
                    setFocusedInput("inicio")
                    setInicioCoordinates(undefined)
                    setFimCoordinates(undefined)
                }}
            />

            <View style={styles.list_container}>
                {searchOptions.length ? (
                    <FlatList
                        data={searchOptions}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Pressable
                                style={styles.item}
                                onPress={() => {
                                    switch (focusedInput) {
                                        case "inicio":
                                            setInicio(item.properties.label)
                                            setInicioCoordinates(item.geometry.coordinates)

                                            setFocusedInput("fim")
                                            break

                                        case "fim":
                                            setFim(item.properties.label)
                                            setFimCoordinates(item.geometry.coordinates)
                                            break

                                        default:
                                            throw new Error("Erro: focusedInput inválido")
                                    }

                                    setSearch("")
                                    setSearchOptions([])
                                }}
                            >
                                <Text style={styles.text}>{item.properties.label}</Text>
                            </Pressable>
                        )}
                    />
                ) : (
                    <View>
                        <View style={styles.switch_container}>
                            <Text style={styles.switch_label}>Priorizar menor elevação</Text>
                            <Switch value={priorizarElevacao} onValueChange={setPriorizarElevacao} />
                        </View>
                        <View style={styles.switch_container}>
                            <Text style={styles.switch_label}>Priorizar iluminação</Text>
                            <Switch value={priorizarIluminacao} onValueChange={setPriorizarIluminacao} />
                        </View>
                        <View style={styles.switch_container}>
                            <Text style={styles.switch_label}>Priorizar pavimentação</Text>
                            <Switch value={priorizarPavimentacao} onValueChange={setPriorizarPavimentacao} />
                        </View>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        gap: 8,
        justifyContent: "center",
        alignItems: "stretch",
    },
    container: {
        flex: 1,
        marginVertical: 20,
        height: 400,
        backgroundColor: "red",
        width: "auto",
    },
    list_container: {
        flex: 1,
        marginVertical: 20,
    },
    text: {
        fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    button: {
        backgroundColor: "lightblue",
        padding: 12,
        marginInline: 10,
        borderRadius: 4,
    },
    item: {
        padding: 16,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    switch_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    switch_label: {
        fontSize: 16,
        color: "#333",
    },
})
