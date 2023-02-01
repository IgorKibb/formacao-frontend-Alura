import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

const ToggleTheme = () => {
   const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches //para identificar o dark do sistema
   const pageClasses = document.documentElement.classList

   useEffect(() => {
      systemPreference && pageClasses.add('dark') //para altarar para dark mode automaticamente
   })
   const toggle = () => {
      pageClasses.toggle('dark')
   }
   return <div className="hidden sm:block">
      <MoonIcon className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={toggle}/>
      <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={toggle}/>
   </div>
}

export default ToggleTheme