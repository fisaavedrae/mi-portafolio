import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './assets/components/home'
import Intro from './assets/components/Intro'
import Expertise from './assets/components/Expertise'
import Skills from './assets/components/Skills'
import Experience from './assets/components/Experience'
import Educacion from './assets/components/Educacion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="contenedor">
      <Home />
      <Intro />
      <Expertise />
      <Skills />
      <Experience />
      <Educacion />
    </div>
  )
}

export default App