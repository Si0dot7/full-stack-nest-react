import { useState } from "react";
import { Courses } from "../interfaces";

type NewCourseFormProps = {
    onNewCourseCreated? : (newCourse: Courses)=> void,
};

const NewCourseForm = (props: NewCourseFormProps) => {
    const [newCourseNumber, setNewCourseNumber] = useState<string>('')
    const [newCourseTitle, setNewCourseTitle] = useState<string>('')

    const handleSave=()=>{
        const newCourse = {
            number: newCourseNumber,
            title: newCourseTitle,
        }

        fetch("http://localhost:3000/courses",{
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(newCourse)
        })
        .then(res=>res.json())
        .then(saveNewCourse=>{
            if(saveNewCourse.id !== undefined){
                if(props.onNewCourseCreated !== undefined){
                    props.onNewCourseCreated(saveNewCourse)
                }
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