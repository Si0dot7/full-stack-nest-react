import { useEffect, useState } from "react"


function App() {
const [message,setMessage] = useState('my message')
useEffect(()=>{
  fetch('http://localhost:3000/courses')
  .then(res=>res.json())
  .then(obj=>{
    setMessage(obj.message)
    
  })
},[])
  return (
    <main>
      <h1 className="text-red-900">{message}</h1>
    </main>
  )
}

export default App
