import React from "react";
import experiences from "../../data/experiences";
import Experience from "../helpers/experience";

function Experiences() {

    return (
        <div>
            <div style={styles.div}>
                <label style={styles.header}>Experience</label> <br/> <br/>
            </div>
            
            {
                experiences.map( (experience, index) => {
                    return (
                        <React.Fragment key={experience.id}>
                            <Experience style={styles.experience} experience={experience} /> <br/>
                        </React.Fragment>
                    );
                })
            }
        </div>
    )
}

export default Experiences;

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
    experience: {
        textAlign: 'left',
    }
}