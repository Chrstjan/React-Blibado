import style from "./LocationFrame.module.scss"

export const LocationFrame = ({locationUrl}) => {
    return (
        <>
        <div>
        <h3>Din lokation:</h3>
        <iframe
        className={style.frameStyling}
        src={locationUrl}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
        </>
    )
}