import style from "./HeaderText.module.scss"

export const HeaderText = () => {
    return (
        <>
        <hgroup>
        <span className={style.headerStyling}>
          <h1><span className={style.blueColor}>Bli</span><span className={style.yellowColor}>ba</span><span className={style.redColor}>do</span></h1><sup>&copy;</sup>
        </span>
          <h2>Vi ved hvor du bor!</h2>
        </hgroup>
        </>
    )
}