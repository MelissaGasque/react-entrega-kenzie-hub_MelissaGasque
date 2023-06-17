import Logo from "../../assets/Logo.png"
import { useForm } from "react-hook-form"
import { Input } from "../../components/inputs"
import { useNavigate } from "react-router-dom"
import { SchemaLogin } from "../../components/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../service/api"

export function LoginPage() {
    const navigate = useNavigate()
    function handleRegisterClick(){
        navigate('/register')
    }
    function handleHomeClick(){
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
          const user = responseData.user
          const token = responseData.token
      
          localStorage.setItem('@TOKEN', token)
          localStorage.setItem('@USERID', user.id)

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
        <>
        <header>
            <img src={Logo} alt="Logo Kenzie Hub cor rosa"/>
        </header>
        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <Input
                    label="Email"
                    type="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                />{errors.email ? <p>{errors.email.message}</p> : null }

                <Input
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha" 
                    {...register("password")}
                />{errors.password ? <p>{errors.password.message}</p> : null }

                <button type="submit">Entrar</button>
                <p>Ainda não possui uma conta?</p>
                <button onClick={handleRegisterClick}>Cadastre-se</button>
             
            </form>
        </main>
        </>
    )
}