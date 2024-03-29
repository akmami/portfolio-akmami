import React, { useState } from "react";
import fonts from "../fonts";

function Achievement(props) {

    const [achievement] = useState(props.achievement);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        achievement ? (
            <div>
                <label style={styles.title}>{achievement.title}</label> <br/>
                <label style={styles.achievement}>Organization: {achievement.organization}</label> <br/>
                <label style={styles.achievement}>Issued: {achievement.issue}</label> <br/>
                {
                    achievement.credential ? (
                        <React.Fragment>
                            <label style={styles.achievement}>Credential: </label>
                            <label style={styles.click}
                                onClick={() => openInNewTab(achievement.credential)}>click to see</label>
                            <br/>
                        </React.Fragment>
                    ) : ('')
                }
                {
                    achievement.results ? (
                        <React.Fragment>
                            <label style={styles.achievement}>Results: {achievement.results}</label> <br/>
                        </React.Fragment>
                    ) : ('')
                }
                {
                    achievement.description ? (
                        <React.Fragment>
                            <label style={styles.achievement}>Description: {achievement.description}</label> <br/>
                        </React.Fragment>
                    ) : ('')
                }
            </div>
        ) : (
            <div>
                <label>Error</label> <br/>
            </div>
        )
    )
}

export default Achievement;

let styles = {
    title: {
        fontSize: fonts.title,
        fontWeight: 'bold'
    },
    achievement: {
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