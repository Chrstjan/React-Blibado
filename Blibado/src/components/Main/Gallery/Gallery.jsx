import {useState} from "react"
import style from "./Gallery.module.scss"

export const Gallery = () => {
    const [thumbnail, setThumbnail] = useState("./src/assets/images/Location-06-04.jpg")

    const handleThumbnail = (e) => {
        let src = e.target.src;
        const imageSrc = src.split("/localhost:5174/")[1];
        setThumbnail(imageSrc);
    }
    return (
        <>
            <section className={style.galleryStyling}>
                <h2>Aktuelt</h2>
                <div className={style.imagesGallery}>
                    <img src={thumbnail} />
                    <figure className={style.galleryContainer}>
                        <img src="/src/assets/images/Location-06-01.jpg" onClick={handleThumbnail} />
                        <img src="/src/assets/images/Location-06-02.jpg" onClick={handleThumbnail} />
                        <img src="/src/assets/images/Location-06-03.jpg" onClick={handleThumbnail} />
                        <img src="/src/assets/images/Location-06-04.jpg" onClick={handleThumbnail} />
                    </figure>
                </div>
            </section>
        </>
    )
}