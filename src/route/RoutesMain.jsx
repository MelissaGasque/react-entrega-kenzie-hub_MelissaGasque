import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/Home"
import { LoginPage } from "../pages/Login"
import {RegisterPage} from "../pages/Register"
import { useState } from "react"

export function RoutesMain(){
    const [ usery, setUser ] = useState(null)
    
    return(
        <Routes>
            <Route path="/home" element={<HomePage usery={usery}/>}/>
            <Route path="/" element={<LoginPage  setUser={setUser}  usery={usery}/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}