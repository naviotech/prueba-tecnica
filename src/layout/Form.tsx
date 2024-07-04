import { useState } from "react"
import useList from "../hooks/useList"
import {v4 as uuidv4} from 'uuid'
import { ListTareas } from "../context/useContextList"

const Form = () => {
  const {list, setList} = useList()

  const [input, setInput] = useState<string>('')
  // Antes de añadir la tarea a la lista validamos datos
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(input === ''){
      return
    }
    if(input.length<4){
      return 
    }
    const newList : ListTareas[] = [...list,{id:uuidv4(), description :input}]
    
    setList(newList)
    
    localStorage.setItem("tareas", JSON.stringify(newList))
    setInput('')
  }
  return (
    <>
      <form className="w-full flex items-center gap-2 max-w-screen-sm md:mt-12" onSubmit={handleSubmit}>
        
        <input value={input?? ""} onChange={(e)=>setInput(e.target.value)} className='w-full px-5 py-3 rounded-lg outline-none' type='text' id='text' placeholder='Ingresa una nueva tarea...'></input>
        <button className="py-3 px-3 bg-green-500 rounded-lg font-bold text-white hover:bg-[#AC2DEB]">Agregar</button>
        
      </form>
    </>
  )
}

export default Form