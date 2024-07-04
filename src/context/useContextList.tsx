import React, {createContext, ReactNode, useState} from "react";
// Creo un contexto global para acceder al estado desde cualquier punto (mas cómodo)
export type ListTareas = {
  id:string,
  description: string,
  checked: boolean
}
export type ListContextType ={
  list: ListTareas[],
  setList: React.Dispatch<React.SetStateAction<ListTareas[]>>,
  update: ListTareas | null,
  setUpdate: React.Dispatch<React.SetStateAction<ListTareas | null>>
}
type ListProviderProps = {
  children: ReactNode
}

export const ListContext = createContext<ListContextType>({
  list:[],
  setList: () => {},
  update: null,
  setUpdate: () =>{}
})
export const ListProvider = ({children}: ListProviderProps )=>{
  const [list, setList] = useState<ListTareas[]>(()=>{
    const list = localStorage.getItem('tareas');
    return list ? JSON.parse(list) : [];
  })

  const [update, setUpdate] = useState<ListTareas|null>(null)
  
  return(
    <ListContext.Provider value={{list, setList, update, setUpdate}}>
      {children}
    </ListContext.Provider>
  )
}