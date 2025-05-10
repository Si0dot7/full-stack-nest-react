import { useEffect, useState } from "react";
import { Courses } from "./interfaces";
import CoursesItem from "./components/CoursesItem";
import NewCourseForm from "./components/NewCourseForm";
import CoursesService from "./services/CoursesService";

function App() {
  const [courses, setCourses] = useState<Courses[]>([])

  const fetchCourses = () => {
    CoursesService.fetchCourses()
    .then(courses=>{
      setCourses(courses)
    })
  }
  const handleNewCourseCreated = (_course: Courses) => {
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
