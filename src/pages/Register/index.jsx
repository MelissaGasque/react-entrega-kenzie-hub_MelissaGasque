import Logo from "../../assets/Logo.png"
import { useForm } from "react-hook-form"
import { Input } from "../../components/inputs"
import { useNavigate } from "react-router-dom"
import { Select } from "../../components/Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaRegister } from "../../components/schema/schema"
import { api } from "../../service/api"

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
        <header>
            <img src={Logo} alt="Logo Kenzie Hub cor rosa"/>
            <button onClick={handleLoginClick}>Voltar</button>
        </header>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
            <h1>Crie sua conta</h1>
            <p>Rápido e grátis, vamos nessa!</p>
            <Input
                label="Nome"
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")} 
            />{errors.name ? <p>{errors.name.message}</p> : null}
            <Input
                label="Email"
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")} 
            />{errors.email ? <p>{errors.email.message}</p> : null}
            <Input
                label="Senha"
                type="password"
                placeholder="Digite aqui sua senha" 
                {...register("password")}
            />{errors.password ? <p>{errors.password.message}</p> : null}
            <Input
                label="Senha"
                type="password"
                placeholder="Digite novamente sua senha" 
                {...register("confirm")}
            />{errors.confirm ? <p>{errors.confirm.message}</p> : null}
            <Input
                label="Bio"
                type="text"
                placeholder="Fale sobre você"
                {...register("bio")} 
            />{errors.bio ? <p>{errors.bio.message}</p> : null}

            <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato" 
                {...register("contact")}
            />{errors.contact ? <p>{errors.contact.message}</p> : null}

            <label>Selecionar Módulo</label>
            <Select {...register("course_module")}>
                <option value="">Selecione uma opção</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </Select>{errors.course_module? <p>{errors.course_module.message}</p> : null}

            <button type="submit">Cadastrar</button>
        </form>
        </>
    )
}



     