import React, { useState } from "react";

function Project(props) {

    const [project] = useState(props.project);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        project ? (
            <div>
                <label style={styles.title}>{project.title}</label> <br/>
                <label style={styles.issue}>{project.issue}</label> <br/>
                {
                    project.course ? (
                        <React.Fragment>
                            <label style={styles.project}>Course: {project.course}</label> <br/>
                        </React.Fragment>
                    ) : ('')
                }
                {
                    project.platform ? (
                        <React.Fragment>
                            <label style={styles.project}>Platform: {project.platform} (archived)</label> <br/>
                        </React.Fragment>
                    ) : ('')
                }
                {
                    project.description ? (
                        <React.Fragment>
                            {
                                project.description.map( (row, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <p style={styles.project}>&emsp;{row}</p>
                                        </React.Fragment>
                                    )
                                    
                                })
                            }
                        </React.Fragment>
                    ) : ('')
                    
                }
                {
                    project.repo ? (
                        <React.Fragment>
                            <label style={styles.project}>Available : </label> 
                            <label style={styles.click} onClick={ () => openInNewTab(project.repo) }>{project.repo}</label> <br/>
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

export default Project;

let styles = {
    title: {
        fontSize: '0.8em',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    issue: {
        fontSize: '0.6em',
    },
    project: {
        fontSize: '0.6em'
    },
    p: {
        marginLeft: '0.6em'
    },
    click: {
        textDecoration: 'underline',
        fontStyle: 'italic',
        cursor: 'pointer',
        fontSize: '0.6em',
        whiteSpace: 'nowrap' 
    }
}