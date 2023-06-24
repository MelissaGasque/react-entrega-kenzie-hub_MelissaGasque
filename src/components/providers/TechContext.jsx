import { createContext } from "react"

export const TechContext = createContext({})

export function TechContextProvider({children}){

   const [ TechList, setTechList ] = useState([])
   
   async function CreateTechnologies(formData){
     const token = localStorage.getItem("@TOKEN")
     try{
         const { data }= await api.post("/users/techs", formData, {
           headers:{
             Authorization:`Bearer ${token}`
           }
         })
         console.log(data)
     
        setTechList(data)
        console.log(TechList)
     }catch (error){
         console.log(error)
         console.log("Tecnologia já adicionada")
     }
 }
    
    //Cadastro de Tecnologias
        //POST /users/techs
        //Adicionar o resultado em setTechList
    //Deleção de tecnologias
        //DELETE /users/techs/:tech_id
        //Pega o id
    //Listagem de tecnologias em tempo real(atualização automatica ao estado)
        // TechList
     
    return(
        <TechContext.Provider value={{ CreateTechnologies }}>
            {children}
        </TechContext.Provider>
    )
}