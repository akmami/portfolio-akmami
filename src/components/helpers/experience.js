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
                <label style={styles.experience}>Company: {experience.organization}</label> <br/>
                <label style={styles.experience}>Date: {experience.date}</label> <br/>
                {
                    experience.descriptions.map( (row, index) => {
                        return (
                            <React.Fragment key={index}>
                                <label style={styles.experience} > - {row}</label> <br/>
                            </React.Fragment>
                        )
                        
                    })
                }
                <label style={styles.experience}>Used: {experience.used}</label> <br/>
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
        fontSize: '0.85em'
    },
    experience: {
        fontSize: '0.7em'
    },
    click: {
        textDecoration: 'underline',
        fontStyle: 'italic',
        cursor: 'pointer',
        fontSize: '0.7em',
        whiteSpace: 'nowrap' 
    }
}