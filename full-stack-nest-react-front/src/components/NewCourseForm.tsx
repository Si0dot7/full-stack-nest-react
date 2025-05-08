import { useState } from "react";

type NewCourseFormProps = {

};

const NewCourseForm = (props: NewCourseFormProps) => {
    const [newCourseNumber, setNewCourseNumber] = useState<string>('')
    const [newCourseTitle, setNewCourseTitle] = useState<string>('')
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
                <button className="border bg-green-400" onClick={() => alert(`${newCourseNumber} -- ${newCourseTitle}`)}>Save</button>
            </section>
        </div>
    );
}

export default NewCourseForm