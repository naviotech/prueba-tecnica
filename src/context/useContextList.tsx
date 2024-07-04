import React, {createContext, ReactNode, useState} from "react";
// Creo un contexto global para acceder al estado desde cualquier punto (mas cómodo)
export type ListTareas = {
  id:string,
  description: string
}
export type ListContextType ={
  list: ListTareas[],
  setList: React.Dispatch<React.SetStateAction<ListTareas[]>>
}
type ListProviderProps = {
  children: ReactNode
}

export const ListContext = createContext<ListContextType>({
  list:[],
  setList: () => {}
})
export const ListProvider = ({children}: ListProviderProps )=>{
  const [list, setList] = useState<ListTareas[]>(()=>{
    const list = localStorage.getItem('tareas');
    return list ? JSON.parse(list) : [];
  })
  
  return(
    <ListContext.Provider value={{list, setList}}>
      {children}
    </ListContext.Provider>
  )
}