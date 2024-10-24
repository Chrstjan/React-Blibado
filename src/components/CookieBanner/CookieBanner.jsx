import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import style from "./CookieBanner.module.scss"

export const CookieBanner = () => {
    const [withAnalytics, setWithAnalytics] = useState(false);
    const [hasUserCookie, setHasUserCookie] = useState(null);

    if (withAnalytics === true) {
      //Initialize google analytics with GTag ID
      ReactGA.initialize('G-4DYZV1LRJ8');
    }

    const enableGa = () => {
        setWithAnalytics(true);
        localStorage.setItem('userAccept', 'true');
        setHasUserCookie('true');
    }

    const disableGa = () => {
        setWithAnalytics(false);
        localStorage.setItem('userAccept', 'false');
        setHasUserCookie('false'); // Update the user cookie state
    }

    useEffect(() => {
        const hasUserAccepted = localStorage.getItem("userAccept");
        setHasUserCookie(hasUserAccepted);
        if (hasUserAccepted === 'true') {
            setWithAnalytics(true); // Enable GA if the user accepted cookies previously
        }
    }, []);

    return (
        <>
            {!hasUserCookie && (
                <div className={style.cookieBanner}>
                    <section>
                        <p>This site uses cookies for tracking purposes</p>
                    </section>
                    <section>
                        <button onClick={disableGa}>Deny</button>
                        <button onClick={enableGa}>Accept</button>
                    </section>
                </div>
            )}
        </>
    );
}