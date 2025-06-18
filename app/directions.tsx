import { getPathingOptions, PathingReturnType } from "@/util/services"
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { Button, Dimensions, FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { LineChart } from "react-native-chart-kit"

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
    const [selectedRoute, setSelectedRoute] = useState<
        Array<{
            distance: number
            duration: number
            type: number
            instruction: string
            name: string
            way_points: Array<number>
            exit_number?: number
        }>
    >()

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

    directionOptions.features.sort((a, b) => {
        const variationForA = Math.floor((a.properties.ascent + a.properties.descent) * 100) / 100
        const variationForB = Math.floor((b.properties.ascent + b.properties.descent) * 100) / 100

        return variationForA - variationForB
    })

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                {selectedRoute ? (
                    <>
                        <View style={{ marginVertical: 8 }}>
                            <Button title="Alterar rota" onPress={() => setSelectedRoute(undefined)} />
                        </View>
                        <FlatList
                            data={selectedRoute}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Text style={styles.text}>{item.instruction}</Text>
                                </View>
                            )}
                        />
                    </>
                ) : (
                    <FlatList
                        data={directionOptions.features}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <View style={styles.item}>
                                <Pressable onPress={() => setSelectedRoute(item.properties.segments[0].steps)}>
                                    {/* <Text style={styles.text}>Rota {index + 1}</Text> */}
                                    <Text style={styles.text}>Distância: {item.properties.summary.distance} metros</Text>
                                    <Text style={styles.text}>Duração: {Math.floor(item.properties.summary.duration / 60)} minutos</Text>
                                    <Text style={styles.text}>
                                        Variação total da altitude:{" "}
                                        {Math.floor((item.properties.ascent + item.properties.descent) * 100) / 100} metros
                                    </Text>
                                    <LineChart
                                        data={{
                                            labels: [],
                                            datasets: [{ data: item.geometry.coordinates.map(coord => coord[2]) }],
                                        }}
                                        width={Dimensions.get("window").width - 24} // from react-native
                                        height={80}
                                        // yAxisLabel="$"
                                        yAxisSuffix="m"
                                        yAxisInterval={10} // optional, defaults to 1
                                        withHorizontalLines={false}
                                        withVerticalLines={false}
                                        withDots={false}
                                        chartConfig={{
                                            // backgroundColor: "#e26a00",
                                            backgroundGradientFrom: "#fb8c00",
                                            backgroundGradientTo: "#ffa726",
                                            decimalPlaces: 1,
                                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                            style: {
                                                borderRadius: 16,
                                            },
                                        }}
                                        style={{
                                            marginVertical: 12,
                                            padding: 0,
                                            borderRadius: 8,
                                        }}
                                    />
                                </Pressable>
                            </View>
                        )}
                    />
                )}
            </View>
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
    },
    item: {
        flex: 1,
        paddingVertical: 16,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingInline: 12,
    },
    text: {
        fontSize: 16,
    },
})
