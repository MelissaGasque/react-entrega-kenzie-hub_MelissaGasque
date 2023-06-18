import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.png"
import { useEffect, useState } from "react"
import { Button } from "../../components/button"

import { StyleTitle_1,StyleTitle_2, StyleText_3 } from "../../styles/typography"
import { HeaderHome, MainHome, HomeUsuario, HomeMensagem } from "./style"

export function HomePage() {
  const navigate = useNavigate()
  const [nome, setNome] = useState("")
  const [modulo, setModulo] = useState("")

  useEffect(() => {
    const objeto = JSON.parse(localStorage.getItem("@USER"))
    const nome = objeto.name
    const modulo = objeto.course_module

    setNome(nome)
    setModulo(modulo)
  }, [])

  const handleLoginClick = () => {
    navigate("/");
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
    localStorage.removeItem("@USER")
  };

  return (
    <>
      <HeaderHome>
        <img src={Logo} alt="Logo Kenzie Hub cor rosa" />
        <Button button="sair" onClick={handleLoginClick}>Sair</Button>
      </HeaderHome>
      <MainHome>
      <HomeUsuario>
        <StyleTitle_1>Olá, {nome}</StyleTitle_1>
        <StyleText_3>{modulo}</StyleText_3>
      </HomeUsuario>
      <HomeMensagem>
        <StyleTitle_1>Que pena! Estamos em desenvolvimento :(</StyleTitle_1>
        <StyleTitle_2>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyleTitle_2>
      </HomeMensagem>
      </MainHome>
     
    </>
  );
}