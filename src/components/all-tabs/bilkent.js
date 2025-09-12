
import React, { useState } from "react";
import BilkentCourse from '../helpers/bilkent';
import bilkent_courses from '../../data/bilkent_courses';

function Bilkent() {

    const [bilkent] = useState(bilkent_courses);

    return (
        <div>
            <div style={styles.div}>
                <label style={styles.header}>Bilkent</label> <br/> <br/>
            </div>
            {  
                Object.entries(bilkent).map( ([type, courses]) =>
                    <React.Fragment key={type}>
                        <label style={styles.course}>{type}</label>
                        <br/> <br/>
                        {
                            courses.map( (course, index) => {
                                return (
                                    <React.Fragment key={course.id}>
                                        <BilkentCourse course={course} /> <br/>
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

export default Bilkent;

let styles = {
    header: {
        width: '100%',
        fontSize: '1.5em',
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
        fontSize: '1em',
        fontWeight: 'bold',
    }
}