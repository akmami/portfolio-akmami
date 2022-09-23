import React, { useState } from "react";
import Course from "./all-tabs/course";
import About from "./all-tabs/about";
import Welcome from "./all-tabs/welcome";
import Project from "./all-tabs/project";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState('welcome');

    const handleWelcome = () => {
        console.log("Welcome tab is clicked.")
        setActiveTab('welcome')
    }
    const handleAbout = () => {
        setActiveTab('about')
    }
    const handleCourse = () => {
        setActiveTab('course')
    }
    const handleProject = () => {
        setActiveTab('project')
    }

    const getTab = () => {
        switch(activeTab) {
            case 'welcome':
                return (<Welcome />);
            case 'about':
                    return (<About />);
            case 'course':
                return (<Course />);
            case 'project':
                return (<Project />);
            default:
                return (<Welcome />);
        }
    }

    return (
        <div className="Tabs">
            
            <ul className="nav">
                <li className={activeTab === 'welcome' ? "active" : ""} onClick={ handleWelcome }>Welcome</li>
                <li className={activeTab === 'about' ? "active" : ""} onClick={ handleAbout }>About</li>
                <li className={activeTab === 'course' ? "active" : ""} onClick={ handleCourse }>Courses</li>
                <li className={activeTab === 'project' ? "active" : ""} onClick={ handleProject }>Projects</li>
            </ul>
            <div className="outlet">{ getTab() }
            </div>
        </div>
    );
};

export default Tabs;