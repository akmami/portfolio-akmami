import React, { useState } from "react";

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
        fontSize: '24px'
    },
    course: {
        fontSize: '16px'
    }
}