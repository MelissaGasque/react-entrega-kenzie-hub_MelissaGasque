import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/Home"
import { LoginPage } from "../pages/Login"
import { RegisterPage } from "../pages/Register"
import { PublicRoutes } from "./PublicRoutes"
import { ProtectedRoutes } from "./ProtectedRoutes"
// import { TechContext } from "../components/providers/TechContext"

export function RoutesMain(){    
    return(
        <Routes>
            <Route element={<ProtectedRoutes />}> 
            <Route path="/home" element={<HomePage />} />
            </Route>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />}/>  
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
        </Routes>
    )
}
