import React, {useContext} from "react"
// import ReactDOM from "react-dom"
// import Modal from "react-modal"
import { Input } from "../../inputs/index"
import { Select } from "../../Select/index"
import { useForm } from "react-hook-form"
import { Button } from "../../button"
// import { TechContext } from "../../providers/TechContext"
import { UserContext } from "../../providers/UserContext"



export function ModalCadastro({modalIsOpen, setIsOpen}){
    const {register, handleSubmit, reset} = useForm()
    // formState:{errors}

    function closeModal() {
        setIsOpen(false);
    }

    const { CreateTechnologies } = useContext(UserContext)

    function ModalSubmit(formData){
        CreateTechnologies(formData)
        reset()
    }

    if(!modalIsOpen){
        return null
    }

    return (
        <div>
            <div>
                <h2>Cadastrar Tecnologia</h2>
                <button onClick={closeModal}>X</button>
            </div>
            <form onSubmit={handleSubmit(ModalSubmit)}>
                <Input 
                    label="Nome"
                    type="text"
                    placeholder="Adicione uma tecnologia" 
                    {...register("title")}
                />
                {/* {errors.contact ? <StyleTextErro>{errors.contact.message}</StyleTextErro> : null} */}
                <Select {...register("status")}>
                    <option value="">Selecione uma opção</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </Select>
                {/* {errors.course_module? <StyleTextErro>{errors.course_module.message}</StyleTextErro> : null} */}
                <Button type="submit">Cadastrar Tecnologia</Button>
                {/* button="cadastrarTecnologia -> style" */}
            </form>
        </div>
    )
}