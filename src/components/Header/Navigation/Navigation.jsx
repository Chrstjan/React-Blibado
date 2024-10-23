import { NavLink } from "react-router-dom"
import style from "./Navigation.module.scss"

export const Navigation = () => {
    return (
        <>
            <nav>
             <ul className={style.navigationStyling}>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: "white"}} to={"/"}>Hjem</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: "white"}} to={"/locations"}>Locations</NavLink>
                </li>
                <li> 
                    <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: "white"}} to={"/about"}>Om Os</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: "white"}} to={"/aktuelt"}>Aktuelt</NavLink>
                </li>
                <li>
                    <a href="#">SignUp</a>
                </li>
             </ul>
            </nav>
        </>
    )
}