import React, { useEffect, useState } from "react";
import Course from '../helpers/course';
import courses from '../../data/courses';

function Courses() {

    const[data] = useState(courses);

    return (
        <div>
            <div style={styles.div}>
                <label style={styles.header}>Courses & Certificates</label> <br/> <br/>
            </div>
            {
                Object.entries(data).map( ([type, courses]) =>
                    <React.Fragment key={type}>
                        <label style={styles.course}>{type}</label>
                        <br/> <br/>
                        {
                            courses.map( (course, index) => {
                                return (
                                    <React.Fragment key={course.id}>
                                        <Course style={styles.course} course={course} />
                                        <br/>
                                    </React.Fragment>
                                    
                                );
                            })
                        }
                    </React.Fragment>
                )
            }
        </div>
    )
}

export default Courses;

let styles = {
    header: {
        width: '100%',
        fontSize: '1.2em',
        textAlign: 'center',
    },
    div: {
        width: '100%',
        minHeight: '100%',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
    },
    course: {
        textAlign: 'left',
    },
    type: {
        fontSize: '1.1em'
    }
}