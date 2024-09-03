import { useEffect } from "react"
import { Locations } from "../components/Main/Locations/Locations"

export const LocationsPage = () => {
    useEffect(() => {
        document.title = "Locations Page";
    }, [

    ])
    return (
        <>
            <Locations />
        </>
    )
}