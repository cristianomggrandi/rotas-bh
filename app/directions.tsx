import { getPathingOptions, PathingReturnType } from "@/util/services"
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

const getCoordinates = (start: string, end: string) => {
    const [startLongitude, startLatitude] = start.split(",")
    const [endLongitude, endLatitude] = end.split(",")

    return [
        [startLongitude, startLatitude],
        [endLongitude, endLatitude],
    ]
}

export default function Index() {
    const route = useRoute()
    const [directionOptions, setDirectionOptions] = useState<PathingReturnType>()
    const { start, end } = route.params as { start: string; end: string }
    const [coordinates] = useState(getCoordinates(start, end))

    useEffect(() => {
        getPathingOptions(coordinates)
            .then((teste: any) => {
                setDirectionOptions(teste) // .routes[0].segments[0].steps.map((step: any) => step.instruction))
            })
            .catch((error: any) => {
                console.error("ERROR:", error.message)
            })
    }, [])

    if (!directionOptions) return null

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <FlatList
                    data={directionOptions.features}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.item}>
                            <Text style={styles.text}>Rota {index}</Text>
                            <Text style={styles.text}>
                                Variação de altitude: {Math.floor((item.properties.ascent + item.properties.descent) * 100) / 100}
                            </Text>
                        </View>
                    )}
                />
            </View>
            {/* <Text>{JSON.stringify(coordinates)}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        flex: 1,
        padding: 16,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 16,
    },
})
