import { useContext } from "react"
import { ListContext } from "../context/useContextList"
// Creo un customHook para acceder al estado global 
const useList = () => {
  const context = useContext(ListContext)
  
  if(!context){
    throw new Error('Algo falló')
  }
  return context
}

export default useList
