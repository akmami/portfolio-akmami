import React, { useState } from "react";

function Experience(props) {

    const [experience] = useState(props.experience);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        experience ? (
            <div>
                <label style={styles.title}>{experience.title}</label> <br/>
                <label style={styles.company}>{experience.organization}</label> 
                <label style={styles.experience}> &#9643; {experience.type}</label> <br/>
                <label style={styles.experience}>{experience.date}</label> <br/>
                {
                    experience.descriptions.map( (row, index) => {
                        return (
                            <React.Fragment key={index}>
                                <label style={styles.experience} > &#x2022; {row}</label> <br/>
                            </React.Fragment>
                        )
                        
                    })
                }
                {
                    experience.used ? (
                        <div>
                            <label style={styles.experience}>Used: {experience.used}</label> <br/>
                        </div>
                        ) : 
                        null
                }
                {
                    experience.repos.map( (repo, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    Object.entries(repo).map( ([app, link]) => {
                                        return (
                                            <React.Fragment key={app}>
                                                <label style={styles.experience}>{app} : </label> 
                                                <label style={styles.click} onClick={ () => openInNewTab(link) }> {link} </label> <br/>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </React.Fragment>
                        )
                    } )
                }
            </div>
        ) : (
            <div>
                <label>Error</label> <br/>
            </div>
        )
    )
}

export default Experience;

let styles = {
    title: {
        fontSize: '1em',
        fontWeight: 'bold'
    },
    experience: {
        fontSize: '0.6em',
        fontWeight: 'normal'
    },
    company: {
        fontSize: '0.6em',
        fontWeight: 'bold'
    },
    click: {
        textDecoration: 'underline',
        fontStyle: 'italic',
        cursor: 'pointer',
        fontSize: '0.6em',
        whiteSpace: 'nowrap' 
    }
}