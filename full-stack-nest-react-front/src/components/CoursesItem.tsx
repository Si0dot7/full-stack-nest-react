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

  const [newReviewComment, setNewReviewComment] = useState<string>('')
  const [newReviewScore, setNewReviewScore] = useState<number>(1)

  const newReviewScoreOptions = [1, 2, 3, 4, 5]


  const fetchUpdate = () => {
    if (courses.id) {
      CoursesService.fetchReview(courses.id)
        .then(review => {
          setReview(review)
        })
    }
  }

  const clearNewReviewForm=()=>{
    setNewReviewComment('')
    setNewReviewScore(1)
  }

  const toggleVisible = () => {
    if (!reviewToggleVisible) {
      fetchUpdate();
      setReviewToggleVisible(true)
    } else {
      setReviewToggleVisible(false)
    }
  }

  const handleSaveReview = () => {
    const newReview: Review = {
      comment: newReviewComment,
      score: newReviewScore,
    }
    if (courses.id) {
      CoursesService.createReview(newReview, courses.id)
        .then(saveNewReview => {
          if (saveNewReview) {
            fetchUpdate();
            clearNewReviewForm();
          }
        })
    }
  }

  return (
    <div className=" mb-4 flex justify-center">
      <div className="block">
        <div className="text-red-700">
          {courses.id},{courses.number},{courses.title}
        </div>
        <div>
          <button className="border bg-blue-300" onClick={toggleVisible}>toggle</button>
        </div>
        <div>
          {reviewToggleVisible &&
            <div>
              {review.map((item) => {
                return <p key={item.id}>{item.comment} | {item.score}</p>
              })}
            </div>
          }
        </div>
        <div>
          <section>
            <h1>Add Request</h1>
          </section>
          <section className="flex">
            <h1>comment: </h1>
            <input className="border" value={newReviewComment} onChange={(e) => { setNewReviewComment(e.target.value) }} />
          </section>
          <section className="flex">
            <h1>score: </h1>
            <select className="border" value={newReviewScore} onChange={(e) => { setNewReviewScore(parseInt(e.target.value, 10)) }}>
              {newReviewScoreOptions.map((item,index) => {
                return <option key={index} value={item} className="border">{item}</option>
              })}
            </select>
          </section>
          <button className="border" onClick={handleSaveReview}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default CoursesItem