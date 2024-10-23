import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { About } from "../components/Main/About/About"

export const LandingPage = () => {
    return (
        <>
            <Helmet>
            <title>Blibado</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name='description' content="Blibados forside" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Forside - Blibado" />
            <meta property="og:description" content="Blibados  forside" />
            <meta property="og:url" content="" />
            </Helmet>
            
            <About videoSrc={"./src/assets/pexels-taryn-elliott-9583751 (720p).mp4"}/>
        </>
    )
}