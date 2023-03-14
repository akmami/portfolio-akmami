import React, { useState } from "react";
import fonts from "../fonts";

function Course(props) {

    const [course] = useState(props.course);

    const openInNewTab = url => {
        window.open(url);
    };

    return (
        course ? (
            <div>
                <label style={styles.title}>{course.title}</label> <br/>
                <label style={styles.course}>Organization: {course.organization}</label> <br/>
                <label style={styles.course}>Issued: {course.issue}</label> <br/>
                <label style={styles.course}>Credential: </label>
                <label style={styles.click}
                    onClick={() => openInNewTab(course.credential)}>click to see</label>
                <br/>
                <label style={styles.course}>Learnt & Used: {course.learnt}</label> <br/>
            </div>
        ) : (
            <div>
                <label>Error</label> <br/>
            </div>
        )
    )
}

export default Course;

let styles = {
    title: {
        fontSize: fonts.subsubtitle
    },
    course: {
        fontSize: fonts.text
    },
    click: {
        textDecoration: 'underline',
        fontStyle: 'italic',
        cursor: 'pointer',
        fontSize: fonts.text,
        whiteSpace: 'nowrap' 
    }
}