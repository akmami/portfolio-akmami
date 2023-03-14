
import React, { useState } from "react";
import BilkentCourse from '../helpers/bilkent';
import bilkent_courses from '../../data/bilkent_courses';
import fonts from '../fonts';

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
                            <BilkentCourse course={course} /> <br/>
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
        fontSize: fonts.title,
        textAlign: 'center',
    },
    div: {
        width: '100%',
        minHeight: '100%',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
    }
}