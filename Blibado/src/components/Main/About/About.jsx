import style from "./About.module.scss"

export const About = ({videoSrc}) => {
    return (
        <>
         <section className={style.aboutStyling}>
            <header>
                <h2>Om os</h2>
            </header>
            <article className={style.infoStyling}>
                <video autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
                <header>
                    <h4>Begyndelsen</h4>
                </header>
                <p>BliBaDO begyndte i 2018 da to udviklere var værter for tre rejsende, der ledte efter et sted at bo. Nu har millioner af værter og gæster oprettet en gratis BliBaDo-konto.</p>
                <p>Uanset om det er en forretningsrejse, weekendtur, familieferie, eller et længere ophold, er der millioner af fantastiske steder at besøge.</p>
                <p>Vi arbejder med: Bekræftede personlige profiler samt en pålidelig platform til at opkræve og overføre betalinger.</p>
                <footer>
                    <a href="#">Læs mere:</a>
                </footer>
            </article>
         </section>
        </>
    )
}