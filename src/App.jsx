import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bar from './components/Bar'
import Square from './components/Square'
import Anakin from '../public/Jedi/Anakin.bmp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex gap'>
        <Bar/>
        <Bar/>
        <Bar/>
      </div>
      <div className='grid container'>
        <Square image={Anakin}/>
        <Square image={Anakin}/>
        <Square image={Anakin}/>
        <Square image={Anakin}/>
      </div>
    </>
  )
}

export default App
