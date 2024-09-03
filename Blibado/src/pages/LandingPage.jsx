import {  Main } from "../components/Main/Main"
import { About } from "../components/Main/About/About"

export const LandingPage = () => {
    return (
        <>
            <Main>
                <About videoSrc={"./src/assets/pexels-taryn-elliott-9583751 (720p).mp4"}/>
            </Main>
        </>
    )
}