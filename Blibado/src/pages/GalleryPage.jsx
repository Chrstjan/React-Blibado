import { useEffect } from "react"
import { Gallery } from "../components/Main/Gallery/Gallery"

export const GalleryPage = () => {
    useEffect(() => {
        document.title = "Gallery Page";
    }, [

    ])
    return (
        <>
            <Gallery />
        </>
    )
}