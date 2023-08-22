import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './test.jsx'
function App() {


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PK tant de haine</h1>
      <div style={{display : 'flex'}}>

      <Counter1  />
      <Counter1  />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Test />
    </div>
  )
}
function Counter1(){
  const [count, setCount] = useState(0)

  return (
    <div className="card">
        <h3>COUNT 1 </h3>
        <p>
        {count}
        </p>
        <button onClick={() => setCount(count + 1)}>
          Counter ++
        </button>
      </div>
  )
}



export default App
