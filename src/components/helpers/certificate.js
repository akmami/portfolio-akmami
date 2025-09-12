import { useState } from "react";

function Certificate(props) {

    const [course] = useState(props.course);

    const openInNewTab = url => {
        window.open(url);
    };

    return (
        course ? (
            <div>
                <label style={styles.title}>{course.title}</label> <br/>
                <label style={styles.organization}>{course.organization}</label>
                <label style={styles.course}> &#9702; {course.issue}</label> <br/>
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

export default Certificate;

let styles = {
    title: {
        fontSize: '0.8em'
    },
    organization: {
        fontSize: '0.6em',
        fontWeight: 'bold'
    },
    course: {
        fontSize: '0.6em'
    },
    click: {
        textDecoration: 'underline',
        fontStyle: 'italic',
        cursor: 'pointer',
        fontSize: '0.6em',
        whiteSpace: 'nowrap' 
    }
}