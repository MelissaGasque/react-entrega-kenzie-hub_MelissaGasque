import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.png"
import { useEffect, useState } from "react"
import { Button } from "../../components/button"

import { StyleTitle_1,StyleTitle_2, StyleText_3 } from "../../styles/typography"
import { ContainerHeader, HeaderHome, HomeUsuario, HomeMensagem, ContainerBody} from "./style"

export function HomePage({usery}) {
  const navigate = useNavigate()
  const [nome, setNome] = useState("")
  const [modulo, setModulo] = useState("")

  useEffect(() => {
    const objeto = usery
    const nome = objeto.name
    const modulo = objeto.course_module

    setNome(nome)
    setModulo(modulo)
  }, [])

  const handleLoginClick = () => {
    navigate("/")
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
  }

  return (
    <>
      <HeaderHome>
        <ContainerHeader>
          <img src={Logo} alt="Logo Kenzie Hub cor rosa" />
          <Button button="sair" onClick={handleLoginClick}>Sair</Button>
        </ContainerHeader>
      </HeaderHome>
      <HomeUsuario>
        <ContainerBody>
          <StyleTitle_1>Olá, {nome}</StyleTitle_1>
          <StyleText_3>{modulo}</StyleText_3> 
        </ContainerBody>
      </HomeUsuario>
      <HomeMensagem>
        <StyleTitle_1>Que pena! Estamos em desenvolvimento :(</StyleTitle_1>
        <StyleTitle_2>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyleTitle_2>
      </HomeMensagem>     
    </>
  )
}