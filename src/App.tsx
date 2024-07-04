import Header from "./layout/Header"
import { ListProvider } from "./context/useContextList"
import TodoList from "./Components/TodoList"
function App() {
  return (
    <ListProvider>
      <Header/>
      <main className="flex flex-col justify-center items-center">
        <TodoList/>
      </main>
    </ListProvider>
  )
}

export default App
