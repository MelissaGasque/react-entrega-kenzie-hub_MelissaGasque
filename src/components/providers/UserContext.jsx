import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../service/api"
import { toast } from 'react-toastify'

export const UserContext = createContext({})

export function UserProvider({children}){
  const [usery, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("@TOKEN")
    async function autoLogin(){
      try{
        setLoading(true)
        const {data} = await api.get("/profile", {
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        setUser(data)
        // navigate("/home")       
      }catch (error){
          console.log("O erro é no autoLogin")
      }finally{
        setLoading (false)
      }
    }
    autoLogin()
  },[])

  async function RegistrationAPI(data){
      try{
          await api.post("/users", data)
          toast.success("Conta criada com sucesso!")
          setTimeout(() => {
              navigate("/" )
          }, 1500)
      }catch (error){
          toast.error("Ops! Algo deu errado")
      }
    }
    

  async function loginAPI(data) { 
      
      try {
        const response = await api.post("/sessions", data)

        const responseData = response.data
        const token = responseData.token
        
          setUser(responseData.user) 
      
        localStorage.setItem('@TOKEN', token)
        localStorage.setItem('@USERID', responseData.user.id)

          navigate("/home")

      } catch (error) {
          toast.error("Não foi possível fazer login")
      }
    }

    const LogOut = () => {
      localStorage.removeItem("@TOKEN")
      localStorage.removeItem("@USERID")
      setUser(null)
      navigate("/")
    }

    //Teste TECHCONTEXT
    const [ techList, setTechList ] = useState([])

    async function CreateTechnologies(formData){
      const token = localStorage.getItem("@TOKEN")
      try{
          const { data } = await api.post("/users/techs", formData, {
            // Verificar o data
            headers:{
              Authorization:`Bearer ${token}`
            }
          })
          console.log(data)        
          setTechList(data)
          toast.success("Tecnologia adicionada!")
      }catch (error){
          console.log(error)
          toast.error("Tecnologia já adicionada")
      }
  }

  return(
      <UserContext.Provider value={{ usery, setUser, loginAPI, LogOut, RegistrationAPI, loading, CreateTechnologies }}>
          {children}
      </UserContext.Provider>
  )
}
