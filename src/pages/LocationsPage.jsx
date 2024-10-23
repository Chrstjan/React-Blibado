import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { Locations } from "../components/Main/Locations/Locations"

export const LocationsPage = () => {

    return (
        <>
            <Helmet>
                <title>Blibado Locations</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description' content="Blibados locations side" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Locations - Blibado" />
                <meta property="og:description" content="Blibados Locations side" />
                <meta property="og:url" content="https://react-blibado.netlify.app/locations" />    
            </Helmet>

            <Locations />
        </>
    )
}