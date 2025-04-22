import { useEffect, useState } from "react";
import { Courses } from "./interfaces";
import CoursesItem from "./CoursesItem";

function App() {
  const [courses, setCourses] = useState<Courses[]>([])
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
        return <CoursesItem key={index} courses={item}/>
      })}
    </main>
  )
}

export default App
