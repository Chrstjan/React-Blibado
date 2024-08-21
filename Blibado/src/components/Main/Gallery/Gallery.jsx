import style from "./Gallery.module.scss"

export const Gallery = ({galleryThumbnail}) => {
    return (
        <>
            <section className={style.galleryStyling}>
                <h2>Aktuelt</h2>
                <div className={style.imagesGallery}>
                    <img src={galleryThumbnail} />
                    <figure className={style.galleryContainer}>
                        <img src="/src/assets/images/Location-06-01.jpg" />
                        <img src="/src/assets/images/Location-06-02.jpg" />
                        <img src="/src/assets/images/Location-06-03.jpg" />
                        <img src="/src/assets/images/Location-06-04.jpg" />
                    </figure>
                </div>
            </section>
        </>
    )
}