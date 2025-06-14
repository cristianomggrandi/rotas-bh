import { Stack } from "expo-router"

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Rota" }} />
            <Stack.Screen name="directions" options={{ title: "Direções" }} />
        </Stack>
    )
}
