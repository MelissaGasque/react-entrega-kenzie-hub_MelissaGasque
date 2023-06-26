import React, {useContext} from "react"
import { Input } from "../../inputs/index"
import { Select } from "../../Select/index"
import { useForm } from "react-hook-form"
import { Button } from "../../button"
import { TechContext } from "../../../providers/TechContext"
import { StyledBackdrop, StyledModal, StyledHeader, StyledForm } from "./style"
import { StyleTextErro, StyleText_1 } from "../../../styles/typography"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaModalCreate } from "../../schema/schema"



export function ModalCadastro({modalIsOpen, setIsOpen}){
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver:
        zodResolver(SchemaModalCreate)
    })

    function closeModal() {
        setIsOpen(false);
    }

    const { CreateTechnologies } = useContext(TechContext)

    function ModalSubmit(formData){
        CreateTechnologies(formData)
        reset()
        setIsOpen(false)
    }

    if(!modalIsOpen){
        return null
    }

    return (
        <StyledBackdrop>
            <StyledModal>
                <StyledHeader>
                    <h2>Cadastrar Tecnologia</h2>
                    <Button button="x" onClick={closeModal}>X</Button>
                </StyledHeader>
                <StyledForm onSubmit={handleSubmit(ModalSubmit)}>
                    <Input 
                        label="Nome"
                        type="text"
                        placeholder="Adicione uma tecnologia" 
                        {...register("title")}
                    /> {errors.title ? <StyleTextErro>{errors.title.message}</StyleTextErro> : null}
                    <StyleText_1>Selecionar Status</StyleText_1>
                    <Select {...register("status")}>
                        <option value="">Selecione uma opção</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select> {errors.status? <StyleTextErro>{errors.status.message}</StyleTextErro> : null}
                    <Button button="entrar" type="submit">Cadastrar Tecnologia</Button>
                </StyledForm>
            </StyledModal>
        </StyledBackdrop>
    )
}