import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"


export function PublicRoutes(){
    const { usery } = useContext(UserContext)

    return !usery ? <Outlet /> : <Navigate to="/home" />
}