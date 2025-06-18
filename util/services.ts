import Openrouteservice from "openrouteservice-js"

const ORSDirections = new Openrouteservice.Directions({ api_key: process.env.EXPO_PUBLIC_ORS_KEY })
const ORSGeocode = new Openrouteservice.Geocode({ api_key: process.env.EXPO_PUBLIC_ORS_KEY })

type GeocodeReturnType = {
    geocoding: {
        version: string
        attribution: string
        query: {
            text: string
            size: number
            private: boolean
            lang: {
                name: string
                iso6391: string
                iso6393: string
                via: string
                defaulted: boolean
            }
            querySize: number
            parser: string
            parsed_text: {
                street: string
                housenumber: string
            }
        }
        engine: {
            name: string
            author: string
            version: string
        }
        timestamp: number
    }
    type: string
    features: Array<{
        type: string
        geometry: {
            type: string
            coordinates: Array<number>
        }
        properties: {
            id: string
            gid: string
            layer: string
            source: string
            source_id: string
            name: string
            street: string
            confidence: number
            match_type: string
            accuracy: string
            country: string
            country_gid: string
            country_a: string
            macroregion: string
            macroregion_gid: string
            region: string
            region_gid: string
            region_a: string
            county: string
            county_gid: string
            localadmin: string
            localadmin_gid: string
            locality: string
            locality_gid: string
            continent: string
            continent_gid: string
            label: string
        }
        bbox: Array<number>
    }>
    bbox: Array<number>
}

export async function searchWithText(query: string): Promise<GeocodeReturnType> {
    return await ORSGeocode.geocode({
        text: query,
    })
}

export type PathingReturnType = {
    type: string
    bbox: Array<number>
    features: Array<{
        bbox: Array<number>
        type: string
        properties: {
            ascent: number
            descent: number
            segments: Array<{
                distance: number
                duration: number
                steps: Array<{
                    distance: number
                    duration: number
                    type: number
                    instruction: string
                    name: string
                    way_points: Array<number>
                    exit_number?: number
                }>
                ascent: number
                descent: number
            }>
            extras: {
                steepness: {
                    values: Array<Array<number>>
                    summary: Array<{
                        value: number
                        distance: number
                        amount: number
                    }>
                }
            }
            way_points: Array<number>
            summary: {
                distance: number
                duration: number
            }
        }
        geometry: {
            coordinates: Array<Array<number>>
            type: string
        }
    }>
    metadata: {
        attribution: string
        service: string
        timestamp: number
        query: {
            coordinates: Array<Array<number>>
            profile: string
            profileName: string
            format: string
            language: string
            elevation: boolean
            extra_info: Array<string>
            alternative_routes: {
                target_count: number
            }
        }
        engine: {
            version: string
            build_date: string
            graph_date: string
        }
    }
}



export async function getPathingOptions(coordinates: string[][]) {
    // const pathingOptions: PathingReturnType = await ORSDirections.calculate({
    //     coordinates,
    //     alternative_routes: { target_count: 3 },
    //     profile: "foot-walking",
    //     format: "json",
    //     api_version: "v2",
    //     language: "pt",
    //     elevation: true
    // })

    const response = await fetch("https://api.openrouteservice.org/v2/directions/foot-walking/geojson",
        {
            method: "POST",
            headers: {
                Authorization: process.env.EXPO_PUBLIC_ORS_KEY ?? "",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                coordinates,
                alternative_routes: { target_count: 3 },
                profile: "foot-walking",
                format: "json",
                // api_version: "v2",
                language: "pt",
                elevation: true,
                extra_info: ["steepness"]
            })
        }
    )

    const data = await response.json()

    // console.log("ELEVATION", JSON.stringify(data))

    return data as PathingReturnType
}