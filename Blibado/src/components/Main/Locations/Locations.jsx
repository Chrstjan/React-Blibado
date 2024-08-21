import { locationsArray } from "../../../assets/App"
import style from "./Locations.module.scss"

export const Locations = ({}) => {
    return (
        <>
            <section className={style.locationsStyling}>
                <header>
                    <h2>Locations</h2>
                </header>
                {locationsArray.map((location) => {
                return (
                    <figure key={location.name} className={style.locationStyling}>
                        <img src={location.img} />
                        <h3>{location.name}</h3>
                        <figcaption>
                            <ul>
                                <span>
                                    <li><h4>Antal Soveplader:</h4></li>
                                    <li>Voksne: {location.adults}</li>
                                    <li>Børn: {location.children}</li>
                                </span>
                                <span>
                                    <li><h4>Faciliteter:</h4></li>
                                    <li>Vask: {location.facility}</li>
                                </span>
                                <span>
                                    <li><h4>Reservation:</h4></li>
                                    <li>{location.reservations}</li>
                                </span>
                                <span>
                                    <li><h4>Pris / Døgn:</h4></li>
                                    <li>{location.price}</li>
                                </span>
                                <span>
                                    <li><h4>Beskrivelse:</h4></li>
                                    <li>{location.description}</li>
                                </span>
                            </ul>
                        </figcaption>
                    </figure>    
                )
                })}
            </section>
        </>
    )
}