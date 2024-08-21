import style from "./Navigation.module.scss"

export const Navigation = () => {
    return (
        <>
            <nav>
             <ul className={style.navigationStyling}>
                <li>
                    <a href="#">Om os</a>
                </li>
                <li> 
                    <a href="#">Locations</a>
                </li>
                <li>
                    <a href="#">Aktuelt</a>
                </li>
                <li>
                    <a href="#">SignUp</a>
                </li>
             </ul>
            </nav>
        </>
    )
}