import React, { useState } from "react";
import Course from '../helpers/course';
import online_courses from '../../data/courses';

function Courses() {

    const [courses] = useState(online_courses);

    return (
        <div>
            <div style={styles.div}>
                <label style={styles.header}>Online Courses</label> <br/> <br/>
            </div>
            {
                Object.entries(courses).map( ([type, courses]) =>
                    <React.Fragment key={type}>
                        <label style={styles.course}>{type}</label>
                        <br/> <br/>
                        {
                            courses.map( (course, index) => {
                                return (
                                    <React.Fragment key={course.id}>
                                        <Course style={styles.course} course={course} /> <br/>
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
        fontSize: '28px',
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
        fontSize: '24px',
        fontWeight: 'bold',
    }
}