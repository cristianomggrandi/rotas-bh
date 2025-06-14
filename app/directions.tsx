import { getPathingOptions } from "@/util/services"
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
    const [directions, setDirections] = useState<string[]>([])
    const { start, end } = route.params as { start: string; end: string }
    const [coordinates] = useState(getCoordinates(start, end))

    useEffect(() => {
        getPathingOptions(coordinates)
            .then((teste: any) => {
                setDirections(teste.routes[0].segments[0].steps.map((step: any) => step.instruction))
            })
            .catch((error: any) => {
                console.error("ERROR:", error.message)
            })
    }, [])

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <FlatList
                    data={directions}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item}</Text>
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
        alignItems: "center",
    },
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        padding: 16,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 16,
    },
})
