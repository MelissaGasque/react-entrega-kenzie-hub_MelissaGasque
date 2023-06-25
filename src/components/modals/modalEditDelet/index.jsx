import React, {useContext} from "react"
// import { Input } from "../../inputs/index"
import { Select } from "../../Select/index"
import { useForm } from "react-hook-form"
import { Button } from "../../button"
// import { TechContext } from "../../providers/TechContext"
import { StyleText_1 } from "../../../styles/typography"
import { StyledBackdropEditDelet, StyledFormEditDelet, StyledHeaderEditDelet, StyledModalEditDelet } from "./style"
import {UserContext} from "../../providers/UserContext"



export function ModalEditDelet({modalEditDeletIsOpen, setModalEditDeletIsOpen, selectedTechTitle, selectedTechId}){
    const {register, handleSubmit, reset} = useForm()
    // formState:{errors}
    console.log(selectedTechId)
    function closeModal() {
        setModalEditDeletIsOpen(false);
    }

    const {EditTechnologies, DeleteTechnologies } = useContext(UserContext)
    //Será adicionado no TechContext  

    function handleEdit(formData){
        console.log(formData)
        console.log(selectedTechId)
        EditTechnologies((formData, selectedTechId))
        console.log("Editar tecnologia")
        reset()
    }

    function handleDelete(selectedTechId) {
        DeleteTechnologies(selectedTechId)
        console.log("Excluir tecnologia");
      }

    if(!modalEditDeletIsOpen){
        return null
    }

    return (
        <StyledBackdropEditDelet>
            <StyledModalEditDelet>
                <StyledHeaderEditDelet>
                    <h2>Tecnologia Detalhes</h2>
                    <Button button="x" onClick={closeModal}>X</Button>
                </StyledHeaderEditDelet>
                <StyledFormEditDelet onSubmit={handleSubmit(handleEdit)}>
                    <p>Nome</p>
                    <div>
                        <h1>{selectedTechTitle}</h1>
                    </div>
                    <StyleText_1> Status</StyleText_1>
                    <Select {...register("status")}>
                        <option value="">Selecione uma opção</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    {/* {errors.status? <StyleTextErro>{errors.status.message}</StyleTextErro> : null} */}
                    <div>
                    <Button  type="submit">Salvar Alterações</Button>
                    <Button  type="button" onClick={handleDelete}>Excluir</Button>
                    </div>
                </StyledFormEditDelet>
            </StyledModalEditDelet>
        </StyledBackdropEditDelet>
    )
}