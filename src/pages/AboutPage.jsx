import { Helmet } from 'react-helmet-async';
import { Footer } from "../components/Footer/Footer";
import { LocationFrame } from "../components/Footer/LocationFrame/LocationFrame";
import { LocationInfo } from "../components/Footer/LocationInfo/LocationInfo";

export const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>Blibado om os</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description' content="Blibados om side" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About - Blibado" />
                <meta property="og:description" content="Blibados kontakt side" />
                <meta property="og:url" content="" />
            </Helmet>
            
            <Footer>
                <LocationFrame locationUrl={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3069.12259614415!2d9.966123686014548!3d57.04816051297148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1724229628562!5m2!1sda!2sdk"}/>
                <LocationInfo />
            </Footer>
        </>
    )
}