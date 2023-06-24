import Logo from "../../assets/Logo.png"
import { useContext, useState} from "react"
import { Button } from "../../components/button"
import adicionar from "../../assets/+.png"
import { StyleTitle_1,StyleTitle_2, StyleText_3 } from "../../styles/typography"
import { ContainerHeader, HeaderHome, HomeUsuario, HomeMensagem, ContainerBody} from "./style"
import { UserContext } from "../../components/providers/UserContext"
import { ModalCadastro } from "../../components/modals/modalCadastro"


export function HomePage() {
  const {usery, LogOut} = useContext(UserContext)
  const [modalIsOpen, setIsOpen] = useState(false)
  // console.log(modalIsOpen)

  function openModal() {
    setIsOpen(true)
}

  return (
    <>
      <HeaderHome>
        <ContainerHeader>
          <img src={Logo} alt="Logo Kenzie Hub cor rosa" />
          <Button button="sair" onClick={LogOut}>Sair</Button>
        </ContainerHeader>
      </HeaderHome>
      <HomeUsuario>
        <ContainerBody>
          <StyleTitle_1>Olá, {usery?.name}</StyleTitle_1>
          <StyleText_3>{usery?.course_module}</StyleText_3> 
        </ContainerBody>
      </HomeUsuario>
      <HomeMensagem>
        <div>
        <h3>Tecnologias</h3>
          <Button  onClick={openModal}>
            <img src={adicionar} alt="Símbolo de mais (+) cor branca"/>
          </Button>
        </div>
        <section>
          <p>Verificando</p>
        </section>
      </HomeMensagem>   
      <ModalCadastro modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> 
    </>
  )
}