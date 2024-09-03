import { useEffect } from "react"

export const PageTitle = (pageTitle) => {
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle])
    return (
        <>
            <p></p>
        </>
    )
} 