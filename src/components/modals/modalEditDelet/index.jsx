import React, {useContext} from "react"
import { Select } from "../../Select/index"
import { useForm } from "react-hook-form"
import { Button } from "../../button"
import { TechContext } from "../../../providers/TechContext"
import { StyleTextErro, StyleText_1, StyleTitle_4 } from "../../../styles/typography"
import { StyledBackdropEditDelet, StyledFormEditDelet, StyledHeaderEditDelet, StyledModalEditDelet, StyledFakeInput, StyleDivButton } from "./style"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaModalEditDelet } from "../../schema/schema"



export function ModalEditDelet({modalEditDeletIsOpen, setModalEditDeletIsOpen, selectedTechTitle, selectedTechId}){
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver:
        zodResolver(SchemaModalEditDelet)
    })

    function closeModal() {
        setModalEditDeletIsOpen(false)
    }

    const {EditTechnologies, DeleteTechnologies } = useContext(TechContext)


    function handleEdit(formData){
        EditTechnologies(formData, selectedTechId)
        reset()
        setModalEditDeletIsOpen(false)
    }

    function handleDelete() {
        DeleteTechnologies(selectedTechId)
        setModalEditDeletIsOpen(false)
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
                    <StyleText_1>Nome</StyleText_1>
                    <StyledFakeInput>
                        <StyleTitle_4>{selectedTechTitle}</StyleTitle_4>
                    </StyledFakeInput>
                    <StyleText_1> Status</StyleText_1>
                    <Select {...register("status")}>
                        <option value="">Selecione uma opção</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>{errors.status? <StyleTextErro>{errors.status.message}</StyleTextErro> : null}
                    <StyleDivButton>
                        <Button button="salvar"  type="submit">Salvar Alterações</Button>
                        <Button button="excluir"  type="button" onClick={handleDelete}>Excluir</Button>
                    </StyleDivButton>
                </StyledFormEditDelet>
            </StyledModalEditDelet>
        </StyledBackdropEditDelet>
    )
}