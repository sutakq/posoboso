import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

const Root = () => {

    useEffect(() => {

        document.title = "clothes"

    }, [])

    return (
        <>
        
        <div className="container">

            <Header />

            <Outlet />

        </div>
        
        </>
    )
}

export default Root