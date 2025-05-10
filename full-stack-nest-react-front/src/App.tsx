import { useEffect, useState } from "react";
import { Courses } from "./interfaces";
import CoursesItem from "./components/CoursesItem";
import NewCourseForm from "./components/newCourseForm";

function App() {
  const [courses, setCourses] = useState<Courses[]>([])

  const fetchCourses = () => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(courses => {
        setCourses(courses)
      })
  }
  const handleNewCourseCreated = (course: Courses) => {
    fetchCourses();
  }

  useEffect(() => {
    fetchCourses();
  }, [])

  return (
    <main>
      <div>
        {courses.map((item, index) => {
          return <CoursesItem key={index} courses={item} />
        })}
      </div>
      <NewCourseForm onNewCourseCreated={handleNewCourseCreated}/>
    </main>
  )
}

export default App
