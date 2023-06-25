import { createContext } from "react"

export const TechContext = createContext({})

export function TechContextProvider({children}){

    const [ techList, setTechList ] = useState([])
    // console.log(techList)
  
    //criar tecnologias
    async function CreateTechnologies(formData){
      const token = localStorage.getItem("@TOKEN")
      try{
          const { data } = await api.post("/users/techs", formData, {
          
            headers:{
              Authorization:`Bearer ${token}`
            }
          })      
          setTechList((techList) => [...techList, data])
          toast.success("Tecnologia adicionada!")
      }catch (error){
          console.log(error)
          toast.error("Tecnologia já adicionada")
      }
    }
    //editar
    async function EditTechnologies(formData, tech_id){
      const token = localStorage.getItem("@TOKEN")
      //pegar o ID 
      try{
          const { data } = await api.put(`/users/techs/${tech_id}`, formData, {
            // Verificar o data
            headers:{
              Authorization:`Bearer ${token}`
            }
          })      
          setTechList((techList) => [...techList, data])
          toast.success("Tecnologia editada!")
      }catch (error){
          console.log(error)
          toast.error("Erro ao editar")
      }
    }
    //deletar
    async function DeleteTechnologies(tech_id){
      const token = localStorage.getItem("@TOKEN")
      //pegar o id 
      try{
          const { data } = await api.delete(`/users/techs/${tech_id}`, {
            // Verificar o data
            headers:{
              Authorization:`Bearer ${token}`
            }
          })      
          setTechList((techList) => techList.filter())
          setNewsList((newsList) => newsList.filter(techID => tech_id !== techID.id));
          toast.success("Tecnologia deletada!")
      }catch (error){
          console.log(error)
          toast.error("Erro ao deletar")
      }
    }
     
    return(
        <TechContext.Provider value={{ CreateTechnologies }}>
            {children}
        </TechContext.Provider>
    )
}