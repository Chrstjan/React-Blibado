import style from "./LocationInfo.module.scss"

export const LocationInfo = () => {
    return (
        <>
            <div className={style.infoStyling}>
                <h3>Informationer:</h3>
                <ul>
                    <li>Boulevarden 29,</li>
                    <li>9000 Aalborg</li>
                    <li className={style.contactStyling}>3344 5566</li>
                    <li className={style.contactStyling}>info@blibado.dk</li>
                    <li>CVR: 5533 66 7788</li>
                </ul>
            </div>
        </>
    )
}