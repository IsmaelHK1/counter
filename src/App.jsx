import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)


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
      <h1>Vite + React</h1>
      <div style={{display : 'flex'}}>

      <Counter1 count = {count } setCount = { setCount} />
      <Counter2 count2 = {count2} setCount2 = {setCount2} />
      </div>
      <button onClick={() => {
        setCount(count + 1)
        setCount2(count2 + 1)
        }}>
          Counter ++
        </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
function Counter1(props){
  return (
    <div className="card">
        <h3>COUNT 1 </h3>
        <p>
        {props.count}
        </p>
        <button onClick={() => props.setCount(props.count + 1)}>
          Counter ++
        </button>
      </div>
  )
}
function Counter2(props) {
  return ( 
    <div className="card">
    <h3>COUNT 2 </h3>
    <p>
    {props.count2}
    </p>
    <button onClick={() => props.setCount2(props.count2 + 1)}>
      Counter ++
    </button>
  </div>
  )
}



export default App
