import Input from "../Input/Input"

const Form = ({ onSubmit }) => {
   const safeSubmit = event =>{
      event.preventDefault()
      event.stopPropagation()
      const name = event.target[0].value //target ta se referindo a uma lista do form, nesse caso o primeiro campo.
      const email = event.target[1].value 
      onSubmit({ name, email })
   }
   return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
      <Input type="text" required placeholder="Insira seu nome..." />
      <Input type="email" required placeholder="Insira seu email..." />
      <button type="submit" className="py-1 px-5 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black">Seguir</button>
   </form>
}

export default Form