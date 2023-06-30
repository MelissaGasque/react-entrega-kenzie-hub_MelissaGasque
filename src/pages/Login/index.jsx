import Logo from "../../assets/Logo.png"
import { useForm } from "react-hook-form"
import { Input } from "../../components/inputs"
import { CustomLink } from "../../components/customLink"
import { SchemaLogin } from "../../components/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../components/button"
import "react-toastify/dist/ReactToastify.css"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

import { StyleTitle_1, StyleText_2, StyleTextErro } from "../../styles/typography"
import {  Container, HeaderLogin, FormLogin,  DivLogin } from "./style"


export function LoginPage(){

    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver:
        zodResolver(SchemaLogin)
    })
    
    const { loginAPI  } = useContext(UserContext)

   function onSubmit(formData){
        loginAPI(formData)
        reset()
    }

    return(
        <Container>
            <HeaderLogin>
                <img src={Logo} alt="Logo Kenzie Hub cor rosa"/>
            </HeaderLogin>
            <main>
                <FormLogin onSubmit={handleSubmit(onSubmit)}>
                    <StyleTitle_1> Login </StyleTitle_1>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Digite seu email"
                        {...register("email")}
                    />{errors.email ? <StyleTextErro>{errors.email.message}</StyleTextErro> : null }

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Digite sua senha" 
                        {...register("password")}
                    />{errors.password ? <StyleTextErro>{errors.password.message}</StyleTextErro> : null }

                    <Button button="entrar" type="submit"> Entrar </Button>
                    <DivLogin>
                        <StyleText_2> Ainda não possui uma conta? </StyleText_2>
                    </DivLogin>
                     <CustomLink link="cadastrese" to="/register">Cadastre-se</CustomLink>
                </FormLogin>
            </main>
        </Container>
    )
}