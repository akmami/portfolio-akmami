import React from "react";
import about from '../../data/about';

function About() {
    return (
        <div>
            <div style={styles.div}>
                <label style={styles.header}>About</label> <br/> <br/>
            </div>
            {
                about ? (
                    about.map( (par, index) => {
                        return (
                            <React.Fragment key={index}>
                                <p style={styles.p}>&emsp;&emsp;{par}</p> <br/>
                            </React.Fragment>
                        )
                    })
                ) : (
                    <div>
                        <label>Error</label> <br/>
                    </div>
                )
            }
        </div>

    )
}

export default About;

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
    p: {
        marginLeft: '2em',
        marginRight: '2em',
        fontSize: '0.8em'
    }
}