import { NavLink } from "react-router-dom"
import style from "./Navigation.module.scss"

export const Navigation = () => {
    return (
        <>
            <nav>
             <ul className={style.navigationStyling}>
                <li>
                    <NavLink to={"/"}>Hjem</NavLink>
                </li>
                <li>
                    <NavLink to={"/locations"}>Locations</NavLink>
                </li>
                <li> 
                <NavLink to={"/about"}>Om Os</NavLink>
                </li>
                <li>
                <NavLink to={"/aktuelt"}>aktuelt</NavLink>
                </li>
                <li>
                    <a href="#">SignUp</a>
                </li>
             </ul>
            </nav>
        </>
    )
}