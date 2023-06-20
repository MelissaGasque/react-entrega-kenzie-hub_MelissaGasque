import Logo from "../../assets/Logo.png"
import { useForm } from "react-hook-form"
import { Input } from "../../components/inputs"
import { useNavigate } from "react-router-dom"
import { CustomLink } from "../../components/customLink"
import { SchemaLogin } from "../../components/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../service/api"
import { Button } from "../../components/button"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { StyleTitle_1, StyleText_2, StyleTextErro } from "../../styles/typography"
import {  Container, HeaderLogin, FormLogin,  DivLogin } from "./style"


export function LoginPage({setUser}) {
    const navigate = useNavigate()
    function handleHomeClick() {
        navigate("/home")
    }
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver:
        zodResolver(SchemaLogin)
    })
    
    async function loginAPI(data) {
       
        try {
          const response = await api.post("/sessions", data)

          const responseData = response.data
          const token = responseData.token
         
            setUser(responseData.user) 
       
          localStorage.setItem('@TOKEN', token)
          localStorage.setItem('@USERID', responseData.user.id)

          handleHomeClick()

        } catch (error) {
            toast.error("Não foi possível fazer login")
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
                     <CustomLink link="cadastrese" to="/register">Cadastre-se</CustomLink>
                </FormLogin>
            </main>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </Container>
    )
}