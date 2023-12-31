import React from "react"
import Logo from "../../assets/Logo.png"
import { useContext, useState} from "react"
import { Button } from "../../components/button"
import adicionar from "../../assets/+.png"
import { StyleTitle_1, StyleTitle_3, StyleText_3 } from "../../styles/typography"
import { ContainerHeader, HeaderHome, HomeUsuario, HomeMensagem, ContainerBody, HomeTecnologia, HomeListUl, HomeListLi} from "./style"
import { UserContext } from "../../providers/UserContext"
import { ModalCadastro } from "../../components/modals/modalCadastro"
import { ModalEditDelet } from "../../components/modals/modalEditDelet"
import { TechContext } from "../../providers/TechContext"


export function HomePage() {
  const {usery, LogOut} = useContext(UserContext)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalEditDeletIsOpen, setModalEditDeletIsOpen] = useState(false)
  const [selectedTechTitle, setSelectedTechTitle] = useState("")
  const [selectedTechId, setSelectedTechId] = useState(null)
  
  const { techList } = useContext(TechContext)

  function openModal() {
    setIsOpen(true)
  }

  function handleItemClick(id, title){
    setSelectedTechId(id)
    setSelectedTechTitle(title)
    setModalEditDeletIsOpen(true)
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
      <HomeTecnologia>
      <StyleTitle_3>Tecnologias</StyleTitle_3>
        <Button button="+"  onClick={openModal}>
          <img src={adicionar} alt="Símbolo de mais (+) cor branca"/>
        </Button>
      </HomeTecnologia>
      <HomeListUl>
        {techList.map((tech) => (
          <React.Fragment key={tech.id}>
            <HomeListLi onClick={() => handleItemClick(tech.id, tech.title)}>
              <p>{tech.title}</p>
              <p>{tech.status}</p>
            </HomeListLi>
          </React.Fragment>
        ))}
      </HomeListUl>
      </HomeMensagem>   
      <ModalCadastro
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <ModalEditDelet
        modalEditDeletIsOpen={modalEditDeletIsOpen}
        setModalEditDeletIsOpen={setModalEditDeletIsOpen}
        selectedTechTitle={selectedTechTitle}
        selectedTechId={selectedTechId}
      /> 
    </>
  )
}