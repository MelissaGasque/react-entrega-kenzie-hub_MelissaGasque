import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../service/api"
import { toast } from "react-toastify"

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
      }catch (error){
        
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
              navigate("/")
          }, 1500)
      }catch (error){
          toast.error("Ops! Algo deu errado:" + error.response.data.message)
      }
    }
    

  async function loginAPI(data) {  
    try {
      const response = await api.post("/sessions", data)

      const responseData = response.data
      const token = responseData.token
      
        setUser(responseData.user) 
    
      localStorage.setItem("@TOKEN", token)
      localStorage.setItem("@USERID", responseData.user.id)

        navigate("/home")

    } catch (error) {
        toast.error("Não foi possível fazer login:")
    }
  }

  function LogOut() {
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
    setUser(null)
    navigate("/")
  }
  return(
      <UserContext.Provider value={{ usery, setUser, loginAPI, LogOut, RegistrationAPI, loading}}>
          {children}
      </UserContext.Provider>
  )
}
