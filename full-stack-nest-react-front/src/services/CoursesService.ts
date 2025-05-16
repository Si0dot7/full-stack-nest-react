import { Courses, Review } from "../interfaces";

async function fetchCourses(): Promise<Courses[]> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/courses`);
    const courses = await res.json();
    return courses
}

async function createCourses(newCourse: Courses): Promise<Courses | null> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(newCourse)
    })
    const saveNewCourse: (Courses) = await res.json()
    if (saveNewCourse.id !== undefined) {
        return saveNewCourse
    } else {
        return null;
    }

}

async function fetchReview(courseId: string): Promise<Review[]>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/courses/${courseId}/reviews`)
    const review = await res.json()
    return review
}


export default {
    fetchCourses,
    createCourses,
    fetchReview,
}