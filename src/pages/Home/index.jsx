import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.png"
// import { useEffect } from "react";

export function HomePage({user}) {
    const navigate = useNavigate();
    console.log(user)
    // useEffect(()=>{

    // },[])


    const handleLoginClick = () => {
      navigate("/");
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
    };
  
    return(
        <>
        <header>
            <img src={Logo} alt="Logo Kenzie Hub cor rosa"/>
            <button onClick={handleLoginClick}>Sair</button>
        </header>
        <h1>Olá, Samuel Leão</h1>
        <p>Primeiro módulo  (Introdução ao Frontend)</p>
        <div>
            <h1>Que pena! Estamos em desenvolvimento :(</h1>
            <h2>Nossa aplicação está em desenvolvimento, em breve teremos novidades</h2>
        </div>
        </>
    )
}