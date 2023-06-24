import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../components/providers/UserContext"

export const PublicRoutes = () => {
    const { usery } = useContext(UserContext);

    return !usery ? <Outlet /> : <Navigate to="/home" />;
}