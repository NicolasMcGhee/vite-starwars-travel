import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bar from './components/Bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex gap'>
        <Bar/>
        <Bar/>
        <Bar/>
      </div>
    </>
  )
}

export default App
