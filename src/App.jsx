import './App.css'
import React, { useState, useMemo } from 'react'

function App() {
const [count, setCount] = useState(0)
const [data, setData] = useState(0)
// const renders = () => {
//   console.log("useEffect")
//   return data*5
// }
const renders = useMemo(() => {
  console.log("useEffect")
  return data*5
},[data])
  return (
    <div className="App">
      <h1>Count {count}</h1>
      <h1>Data {data}</h1>
      {/* <h1>Render Data {renders()}</h1> */}
      <h1>Render Data {renders}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setData((data) => data + 1)}>Data</button>
    </div>
  )
}

export default App
