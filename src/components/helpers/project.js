import React, { useState } from "react";
import fonts from "../fonts";

function Project(props) {

    const [project] = useState(props.project);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        project ? (
            <div>
                <label style={styles.title}>{project.title}</label> <br/>
                {
                    project.course ? (
                        <React.Fragment>
                            <label style={styles.project}>Type: {project.type}</label> <br/>
                        </React.Fragment>
                    ) : ('')
                }
                {
                    project.course ? (
                        <React.Fragment>
                            <label style={styles.project}>Course: {project.course}</label> <br/>
                        </React.Fragment>
                    ) : ('')
                }
                {
                    project.course ? (
                        <React.Fragment>
                            <label style={styles.project}>Platform: {project.platform}</label> <br/>
                        </React.Fragment>
                    ) : ('')
                }
                <label style={styles.project}>Status: {project.status}</label> <br/>
                <label style={styles.project}>Release: {project.release}</label> <br/>
                <React.Fragment>
                    <label style={styles.project}>URL : </label> 
                    <label style={styles.click} onClick={ () => openInNewTab(project.url) }>App Store</label> <br/>
                </React.Fragment>
                {
                    project.description ? (
                        <React.Fragment>
                            <label style={styles.project}>Description: </label> <br/>
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
                <label style={styles.project}>Used: {project.used}</label> <br/>
                {
                    project.repo ? (
                        <React.Fragment>
                            <label style={styles.project} onClick={ () => openInNewTab(project.repo)}>Repo: {project.repo}</label> <br/>
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
        fontSize: fonts.subtitle,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    project: {
        fontSize: fonts.text
    },
    p: {
        marginLeft: '2em'
    },
    click: {
        textDecoration: 'underline',
        fontStyle: 'italic',
        cursor: 'pointer',
        fontSize: fonts.text,
        whiteSpace: 'nowrap' 
    }
}