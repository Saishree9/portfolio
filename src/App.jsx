import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='text-3xl bg-red-500 text-white p-5 text-center'>Hello Tailwind 4</h2>
    </>
  )
}

export default App
