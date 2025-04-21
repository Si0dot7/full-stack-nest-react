import { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState<any[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(courses => {
        setCourses(courses)

      })
  }, [])

  return (
    <main>
      {courses.map((item, index) => {
        return <h1 key={index}>{item.number}-{item.title}</h1>
      })}
    </main>
  )
}

export default App
