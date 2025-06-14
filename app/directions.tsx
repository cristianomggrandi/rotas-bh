import { useRoute } from "@react-navigation/native"
import Openrouteservice from "openrouteservice-js"
import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

const ORSDirections = new Openrouteservice.Directions({ api_key: process.env.EXPO_PUBLIC_ORS_KEY })
const ORSGeocode = new Openrouteservice.Geocode({ api_key: process.env.EXPO_PUBLIC_ORS_KEY })

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
        ORSDirections.calculate({
            coordinates,
            alternative_routes: { target_count: 3 },
            profile: "foot-walking",
            format: "json",
            api_version: "v2",
            language: "pt",
        })
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
