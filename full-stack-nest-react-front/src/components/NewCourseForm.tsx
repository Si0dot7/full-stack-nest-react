import { useState } from "react";
import { Courses } from "../interfaces";
import CoursesService from "../services/CoursesService";

type NewCourseFormProps = {
    onNewCourseCreated?: (newCourse: Courses) => void,
};

const NewCourseForm = (props: NewCourseFormProps) => {
    const [newCourseNumber, setNewCourseNumber] = useState<string>('')
    const [newCourseTitle, setNewCourseTitle] = useState<string>('')

    const handleSave = () => {
        const newCourse = {
            number: newCourseNumber,
            title: newCourseTitle,
        }
        CoursesService.createCourses(newCourse)
            .then(saveNewCourse => {
                if (saveNewCourse !== null) {
                    if (props.onNewCourseCreated !== undefined) {
                        props.onNewCourseCreated(saveNewCourse)
                    }
                } else {
                    alert('save error')
                }
            })
    }

    return (
        <div>
            <section>
                <h1>Number: </h1>
                <input className="border" value={newCourseNumber} onChange={(e) => setNewCourseNumber(e.target.value)} />
            </section>
            <section>
                <h1>Title: </h1>
                <input className="border" value={newCourseTitle} onChange={(e) => setNewCourseTitle(e.target.value)} />
            </section>
            <section>
                <button className="border bg-green-400" onClick={handleSave}>Save</button>
            </section>
        </div>
    );
}

export default NewCourseForm