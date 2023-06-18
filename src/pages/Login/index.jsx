import Logo from "../../assets/Logo.png"
import { useForm } from "react-hook-form"
import { Input } from "../../components/inputs"
import { useNavigate } from "react-router-dom"
import { SchemaLogin } from "../../components/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../service/api"
import { Button } from "../../components/button"

import { StyleTitle_1, StyleText_2, StyleTextErro } from "../../styles/typography"
import {  Container, HeaderLogin, FormLogin,  DivLogin } from "./style"


export function LoginPage() {
    const navigate = useNavigate()
    function handleRegisterClick(){
        navigate("/register")
    }
    function handleHomeClick(user) {
        navigate("/home");
    }
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver:
        zodResolver(SchemaLogin)
    })
    
    async function loginAPI(data) {
       
        try {
          const response = await api.post("/sessions", data)

          const responseData = response.data
          const user = responseData.user
          const token = responseData.token
      
          localStorage.setItem('@TOKEN', token)
          localStorage.setItem('@USERID', user.id)
          localStorage.setItem('@USER', JSON.stringify(user));


          handleHomeClick()

        } catch (error) {
          console.log(error);
          //Colocar toastify
        }
      }

   function onSubmit(data){
        loginAPI(data)
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
                    <Button button="cadastrese" onClick={handleRegisterClick}> Cadastre-se </Button>
                </FormLogin>
            </main>
        </Container>
    )
}