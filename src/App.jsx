import { useEffect, useState } from 'react'

import { ThemeProvider } from './contexts/Theme'
import ThemeButton from './component/ThemeButton'
import Card from './component/Card'

function App() {

  const [themeMode,setThemeMode]=useState("light")

  const darkTheme=()=>{
    setThemeMode("dark")
  }
  const lightTheme=()=>{
    setThemeMode("light")
  }
// changing the theme of the page using js

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}> 
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                         <ThemeButton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card />
                    </div>
                </div>
     </div>
     </ThemeProvider>
  )
}

export default App
