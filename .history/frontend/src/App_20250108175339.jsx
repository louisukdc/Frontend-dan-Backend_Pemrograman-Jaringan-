import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="column mt-5 is-centered">
      <div className="column is-half">
        <h1>Lorem ipsum dolor</h1>
      </div>
    </div>
  )
}

export default App
