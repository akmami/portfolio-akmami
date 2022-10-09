
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
                bilkent.map( (course, index) => {
                    return (
                        <React.Fragment key={course.id}>
                            <BilkentCourse style={styles.course} course={course} /> <br/>
                        </React.Fragment>  
                    );
                })    
            }
        </div>
    )
}

export default Bilkent;

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