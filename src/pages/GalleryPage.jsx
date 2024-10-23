import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { Gallery } from "../components/Main/Gallery/Gallery"

export const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Blibado Gallery</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description' content="Blibados gallery side" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Galleri - Blibado" />
                <meta property="og:description" content="Blibados galleri side" />
                <meta property="og:url" content="https://react-blibado.netlify.app/aktuelt" />
            </Helmet>
            <Gallery />
        </>
    )
}