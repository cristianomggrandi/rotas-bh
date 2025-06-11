import { Link } from "expo-router"
import { useState } from "react"
import { Pressable, StyleSheet, TextInput, View } from "react-native"

export default function Index() {
    const [startLatitude, setStartLatitude] = useState("-19.901920")
    const [startLongitude, setStartLongitude] = useState("-43.978613")
    const [endLatitude, setEndLatitude] = useState("-19.911620")
    const [endLongitude, setEndLongitude] = useState("-43.931891")

    return (
        <View style={styles.page}>
            <TextInput style={styles.input} value={startLatitude} onChangeText={setStartLatitude} placeholder="Start Latitude" />
            <TextInput style={styles.input} value={startLongitude} onChangeText={setStartLongitude} placeholder="End Latitude" />
            <TextInput style={styles.input} value={endLatitude} onChangeText={setEndLatitude} placeholder="Start Longitude" />
            <TextInput style={styles.input} value={endLongitude} onChangeText={setEndLongitude} placeholder="End Longitude" />
            <Pressable style={styles.button}>
                <Link
                    href={{
                        pathname: "/directions",
                        params: {
                            start: startLongitude + "," + startLatitude,
                            end: endLongitude + "," + endLatitude,
                        },
                    }}
                >
                    Buscar direções
                </Link>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
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
})
