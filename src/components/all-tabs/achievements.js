import React from "react";
import achievements from "../../data/achievements";
import Achievement from "../helpers/achievement";
import fonts from "../fonts";

function Achievements() {
    return (
        <div>
            <div style={styles.div}>
                <label style={styles.header}>Achievements</label> <br/> <br/>
            </div>
            {
                achievements.map( (achievement, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Achievement achievement={achievement} /> <br/>
                        </React.Fragment>
                        
                    );
                })
            }
        </div>
    )
}

export default Achievements;

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