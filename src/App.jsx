import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>Hello Josh / Jay </p>

        <p>

          <button type="button" onClick={() => setCount((count) => count + Math.floor(Math.random()*5))}>
           New One's == {count}

          </button>

        </p>

      </header>

    </div>
  )
}

export default App
