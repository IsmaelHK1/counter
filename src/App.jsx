import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

// interface CounterProps {
//   globalCount : number
// }

function InfiniteLoop() {
  let num = 0
  while (true) {
    num ++
    return <div>
      {num}
    </div>
  }
}

function App() {
  const [toAdd, setToAdd] = useState(0)

  return (

    <div className="App">
      <InfiniteLoop />
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
      <Counter1 toAdd = {toAdd} />
      <Counter1 toAdd = {toAdd}  />
      </div>
      <button onClick={() => setToAdd(toAdd + 1)}>
          Counter ++
        </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
function Counter1(props){
  const [count, setCount] = useState(0)

  useMemo( () => {
    setCount(count + props.toAdd)
  }, [props.toAdd])

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
