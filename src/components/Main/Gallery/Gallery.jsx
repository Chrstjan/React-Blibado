import {useState} from "react"
import style from "./Gallery.module.scss"

export const Gallery = () => {
    const [thumbnail, setThumbnail] = useState("./Location-06-04.jpg")

    const handleThumbnail = (e) => {
        let src = e.target.src;
        setThumbnail(src);
    }
    return (
        <>
            <section className={style.galleryStyling}>
                <h2>Aktuelt</h2>
                <div className={style.imagesGallery}>
                    <img src={thumbnail} />
                    <figure className={style.galleryContainer}>
                        <img src="./Location-06-01.jpg" onClick={handleThumbnail} />
                        <img src="./Location-06-02.jpg" onClick={handleThumbnail} />
                        <img src="./Location-06-03.jpg" onClick={handleThumbnail} />
                        <img src="./Location-06-04.jpg" onClick={handleThumbnail} />
                    </figure>
                </div>
            </section>
        </>
    )
}