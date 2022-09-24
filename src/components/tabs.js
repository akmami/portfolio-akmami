import React, { useState } from "react";
import Courses from "./all-tabs/courses";
import About from "./all-tabs/about";
import Welcome from "./all-tabs/welcome";
import Projects from "./all-tabs/projects";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState('welcome');

    const handleWelcome = () => {
        console.log("Welcome tab is clicked.")
        setActiveTab('welcome')
    }
    const handleAbout = () => {
        console.log("navigating to About");
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
                return (<Welcome handleAbout={handleAbout}/>);
            case 'about':
                    return (<About />);
            case 'course':
                return (<Courses />);
            case 'project':
                return (<Projects />);
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