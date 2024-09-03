import { useEffect } from "react"
import { About } from "../components/Main/About/About"

export const LandingPage = () => {
    useEffect(() => {
        document.title = "Landing Page";
    }, [

    ])
    return (
        <>
            <About videoSrc={"./src/assets/pexels-taryn-elliott-9583751 (720p).mp4"}/>
        </>
    )
}