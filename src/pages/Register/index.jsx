import Logo from "../../assets/Logo.png"
import { useForm } from "react-hook-form"
import { Input } from "../../components/inputs"
import { useNavigate } from "react-router-dom"
import { Select } from "../../components/Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaRegister } from "../../components/schema/schema"
import { api } from "../../service/api"
import { Button } from "../../components/button"

import { StyleTitle_1, StyleText_3, StyleTextErro, StyleText_1 } from "../../styles/typography"
import { HeaderRegister, FormRegister, FormDivRegister } from "./style"

export function RegisterPage() {
    const navigate = useNavigate();
   function handleLoginClick(){
        navigate("/");
      }

    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver:
        zodResolver(SchemaRegister)
    })

     async function sendRegistrationDataToAPI(data){
        try{
            await api.post("/users", data)
            handleLoginClick()
        }catch (error){
            console.log(error)
            //Aqui será adicionado um toastify
        }
      }
     

    function onSubmitRegister(data){
        console.log(data)
        sendRegistrationDataToAPI(data)
        reset()
    }

    return(
        <>
        <HeaderRegister>
            <img src={Logo} alt="Logo Kenzie Hub cor rosa"/>
            <Button button="voltar" onClick={handleLoginClick}>Voltar</Button>
        </HeaderRegister>
        <FormRegister onSubmit={handleSubmit(onSubmitRegister)}>
            <FormDivRegister>
                <StyleTitle_1>Crie sua conta</StyleTitle_1>
                <StyleText_3>Rápido e grátis, vamos nessa!</StyleText_3>
            </FormDivRegister>
            <Input
                label="Nome"
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")} 
            />{errors.name ? <StyleTextErro>{errors.name.message}</StyleTextErro> : null}
            <Input
                label="Email"
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")} 
            />{errors.email ? <StyleTextErro>{errors.email.message}</StyleTextErro> : null}
            <Input
                label="Senha"
                type="password"
                placeholder="Digite aqui sua senha" 
                {...register("password")}
            />{errors.password ? <StyleTextErro>{errors.password.message}</StyleTextErro> : null}
            <Input
                label="Senha"
                type="password"
                placeholder="Digite novamente sua senha" 
                {...register("confirm")}
            />{errors.confirm ? <StyleTextErro>{errors.confirm.message}</StyleTextErro> : null}
            <Input
                label="Bio"
                type="text"
                placeholder="Fale sobre você"
                {...register("bio")} 
            />{errors.bio ? <StyleTextErro>{errors.bio.message}</StyleTextErro> : null}

            <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato" 
                {...register("contact")}
            />{errors.contact ? <StyleTextErro>{errors.contact.message}</StyleTextErro> : null}

            <StyleText_1>Selecionar Módulo</StyleText_1>
            <Select {...register("course_module")}>
                <option value="">Selecione uma opção</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </Select>{errors.course_module? <StyleTextErro>{errors.course_module.message}</StyleTextErro> : null}

            <Button button="cadastrar" type="submit">Cadastrar</Button>
        </FormRegister>
        </>
    )
}



     