import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${count}`
  }, [count])

  return (
    <>
      
      <button onClick={() => setCount(count + 1)}>Hozzáadás</button>
    </>
  )
}

export default App
