import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"

export function ProtectedRoutes(){
    const { usery } = useContext(UserContext)

    return usery ? <Outlet /> : <Navigate to="/" />


}