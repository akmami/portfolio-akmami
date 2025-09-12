import React, { useState } from "react";

function Achievement(props) {

    const [achievement] = useState(props.achievement);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        achievement ? (
            <div>
                <label style={styles.title}>{achievement.title}</label> <br/>
                <label style={styles.achievement}>{achievement.organization}</label>
                {
                    achievement.issue ? (
                        <label style={styles.achievement}> &#9702; {achievement.issue}</label>
                    ) : null
                }
                <br/>
                {
                    achievement.semester ? (
                        <React.Fragment>
                            <label style={styles.achievement}>Semester: {achievement.semester}</label> <br/>
                        </React.Fragment>
                    ) : ('')
                }
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
        fontSize: '1em',
        fontWeight: 'bold'
    },
    achievement: {
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