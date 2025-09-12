import { useState } from "react";

function BilkentCourse(props) {

    const [course] = useState(props.course);

    return (
        course ? (
            <div>
                <label style={styles.title}>{course.title}</label> <br/>
                <label style={styles.course}>Category: {course.category}</label> <br/>
            </div>
        ) : (
            <div>
                <label>Error</label> <br/>
            </div>
        )
    )
}

export default BilkentCourse;

let styles = {
    title: {
        fontSize: '0.8em'
    },
    course: {
        fontSize: '0.6em'
    }
}