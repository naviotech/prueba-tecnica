import useList from "../hooks/useList"
import { ListTareas } from "../context/useContextList"

const TodoList = () => {
  const { list, setList, setUpdate }  = useList()

  const handleDelete = (id:string) =>{
    
    const newList = list.filter((item: ListTareas) => item.id !== id)
    setList(newList)
    localStorage.setItem("tareas", JSON.stringify(newList))
  }

  const handleClick = (id:string)=>{
    const newList = list.map((item)=>{
      if(item.id === id){
        item.checked = !item.checked
        return item
      }
      return item
    })
    setList(newList)
    localStorage.setItem("tareas", JSON.stringify(newList))
  }
  return (
    <section className="flex flex-col px-6 -mt-4 gap-2 max-w-screen-sm w-full justify-center items-center">
      {list.length>0 &&(<button onClick={()=>setList([])} className=" w-[50%] text-white bg-red-400 rounded-lg -mt-5 py-1 hover:bg-red-700 font-bold mb-5 max-w-screen-sm md:mb-10 md:w-[40%] md:py-2 md:-mt-8">Eliminar Tareas</button>)}
      {list.length>0 ? (list.map((tarea)=>(
        <article key={tarea.id} className="w-full flex justify-between rounded-lg py-4 px-5 bg-white shadow-lg overflow-hidden">
          <div className="flex items-center gap-2 flex-wrap ">
            <input onChange={()=>handleClick(tarea.id)} checked={tarea.checked} type="checkbox" name="tick" id="tick" className="rounded-xl peer/check cursor-pointer" />
            <p className="capitalize peer-checked/check:line-through peer-checked/check:text-black/50 ">{tarea.description}</p>
          </div>
          
          <div className="flex gap-4 flex-wrap">
            <img onClick={()=>setUpdate({id:tarea.id,description:tarea.description, checked: tarea.checked})} src="svg/edit.svg" className="hover:transform cursor-pointer hover:scale-110"></img>
            <img onClick={()=>handleDelete(tarea.id)} src="svg/close.svg" className="hover:transform cursor-pointer hover:scale-110"></img>
          </div>
        </article>
      ))) : <p className="text-center mt-8 text-black/50 text-xl ">No hay tareas aún</p>
      }
      
    </section>
  )
}

export default TodoList
