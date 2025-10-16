import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
          <NavBar/>
          <Hero/>
          <ProductViewer/>
    </main>
  )
}

export default App
