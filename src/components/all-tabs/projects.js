import React from "react";
import projects from "../../data/projects";
import Project from "../helpers/project";

function Projects() {

    return (
        <div>
            <div style={styles.div}>
                <label style={styles.header}>Projects</label> <br/> <br/>
            </div>
            
            {
                Object.entries(projects).map( ([type, projects]) =>
                    <React.Fragment key={type}>
                        <label style={styles.project}>{type}</label>
                        <br/> <br/>
                        {
                            projects.map( (project, index) => {
                                return (
                                    <React.Fragment key={project.id}>
                                        <Project style={styles.course} project={project} /> <br/>
                                    </React.Fragment>
                                    
                                );
                            })
                        }
                    </React.Fragment>  
                )
            }
        </div>
    )
}

export default Projects;

let styles = {
    header: {
        width: '100%',
        fontSize: '28px',
        textAlign: 'center',
    },
    div: {
        width: '100%',
        minHeight: '100%',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
    },
    project: {
        textAlign: 'left',
        fontSize: '24px',
        fontWeight: 'bold'
    }
}