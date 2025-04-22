import { Courses } from "./interfaces"

type CoursesItemProps = {
    courses: Courses;
}

const CoursesItem = (props:CoursesItemProps) => {
    const courses = props.courses

  return (
    <div className="text-red-700">{courses.title}</div>
  )
}

export default CoursesItem