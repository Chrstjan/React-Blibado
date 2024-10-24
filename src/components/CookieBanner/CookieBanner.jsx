import { useEffect, useState } from "react";
import reactGA from "react-ga4";
import style from "./CookieBanner.module.scss"

export const CookieBanner = () => {
    const [withAnalytics, setWithAnalytics] = useState(false);
    const [hasUserCookie, setHasUserCookie] = useState();

    if (withAnalytics === true) {
      //Initialize google analytics with GTag ID
      reactGA.initialize("G-ZP5MEZ7QDT"); //G-4DYZV1LRJ8
    }

    const enableGa = () => {
        setWithAnalytics(true);
        setHasUserCookie(true);
        localStorage.setItem('userAccept', true);
    }

    const disableGa = () => {
        setWithAnalytics(false);
        setHasUserCookie(false);
        localStorage.setItem('userAccept', false);
    }

    const hasUserAccepted = localStorage.getItem("userAccept");


    return (
            !hasUserCookie && hasUserAccepted === null && (
                <div className={style.cookieBanner}>
                    <section>
                        <p>This site uses cookies for tracking purposes</p>
                    </section>
                    <section>
                        <button onClick={disableGa}>Deny</button>
                        <button onClick={enableGa}>Accept</button>
                    </section>
                </div>
            )
    );
}