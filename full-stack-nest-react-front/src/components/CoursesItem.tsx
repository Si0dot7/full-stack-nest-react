import { useState } from "react";
import { Courses, Review } from "../interfaces"
import CoursesService from "../services/CoursesService";

type CoursesItemProps = {
  courses: Courses;
}

const CoursesItem = (props: CoursesItemProps) => {
  const courses = props.courses
  const [reviewToggleVisible, setReviewToggleVisible] = useState<boolean>(false)
  const [review, setReview] = useState<Review[]>([]);

  const toggleVisible = () => {
    if (!reviewToggleVisible) {
      
      if (courses.id) {
        CoursesService.fetchReview(courses.id)
          .then(review => {
            setReview(review)
            setReviewToggleVisible(true)
            console.log(review);
            
          })

      } else {
        setReviewToggleVisible(true)
        return <p>don't mate any courseId</p>
        
      }
    } else {
      setReviewToggleVisible(false)
    }
  }

  return (
    <div className=" mb-4">
      <div className="text-red-700">
        {courses.id},{courses.number},{courses.title}
      </div>
      <div>
        <button className="border bg-blue-300" onClick={toggleVisible}>toggle</button>
      </div>
      <div>
        {reviewToggleVisible &&
          <div>
            {review.map(item=>{
              return <p key={item.id}>{item.comment} | {item.score}</p>
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default CoursesItem