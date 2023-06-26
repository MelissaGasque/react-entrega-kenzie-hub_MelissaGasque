import { createContext, useContext, useState } from "react"
import { api } from "../service/api"
import { toast } from "react-toastify"
import { UserContext } from "./UserContext"
export const TechContext = createContext({})

export function UserProviderTech({children}){
  const {usery} = useContext(UserContext)
  const [ techList, setTechList ] = useState(usery?.techs || [])

  async function CreateTechnologies(formData){
    const token = localStorage.getItem("@TOKEN")
    try{
        const { data } = await api.post("/users/techs", formData, {
        
          headers:{
            Authorization:`Bearer ${token}`
          }
        })  
        setTechList([...techList, data])
        toast.success("Tecnologia adicionada!")
    }catch (error){
        toast.error("Tecnologia já adicionada")
    }
  }

  async function EditTechnologies(formData, tech_id){
    const token = localStorage.getItem("@TOKEN")
    try{
        const { data } = await api.put(`/users/techs/${tech_id}`, formData, {
          headers:{
            Authorization:`Bearer ${token}`
          }
        })      
        setTechList((prevTechList) =>
        prevTechList.map((tech) => (tech.id === tech_id ? data : tech)))
        toast.success("Tecnologia editada!")
    }catch (error){
        toast.error("Erro ao editar! É necessário selecionar um novo o status")
    }
  }
   
  async function DeleteTechnologies(tech_id){
    const token = localStorage.getItem("@TOKEN")
    try{
          await api.delete(`/users/techs/${tech_id}`, {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }) 
        setTechList((techList) => techList.filter(techID => tech_id !== techID.id))
        toast.success("Tecnologia deletada!")
    }catch (error){
        toast.error("Erro ao deletar")
    }
  }
     
    return(
        <TechContext.Provider value={{ CreateTechnologies,  EditTechnologies, DeleteTechnologies,  techList }}>
            {children}
        </TechContext.Provider>
    )
}