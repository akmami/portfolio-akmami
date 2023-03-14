import React from "react";
import projects from "../../data/projects";
import Project from "../helpers/project";
import fonts from "../fonts";

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
                                        <Project project={project} /> <br/>
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
        fontSize: fonts.title,
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
        fontSize: fonts.subtitle,
        fontWeight: 'bold'
    }
}