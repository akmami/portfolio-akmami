import React, { useState } from "react";

function Course(props) {

    const [course] = useState(props.course);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
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
        fontSize: '0.85em'
    },
    course: {
        fontSize: '0.7em'
    },
    click: {
        textDecoration: 'underline',
        fontStyle: 'italic',
        cursor: 'pointer',
        fontSize: '0.7em',
        whiteSpace: 'nowrap' 
    }
}