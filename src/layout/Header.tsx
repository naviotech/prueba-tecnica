import Form from "./Form"

const Header = () => {
  return (
    <header className="px-6 py-12 bg-mobile-light bg-no-repeat bg-cover flex flex-col items-center justify-center md:bg-desktop-light md:pb-32 md:pt-20 md:px-44">
      <article className="max-w-screen-lg w-full">
        <nav className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-white">TODO</h1>
          
        </nav>
        
        <article className="flex justify-center items-center mt-10">
          <Form/>
        </article>
      </article>
      
    </header>
  )
}

export default Header
