import React, { useState } from "react";
import Certificates from "./all-tabs/certificates";
import About from "./all-tabs/about";
import Welcome from "./all-tabs/welcome";
import Projects from "./all-tabs/projects";
import Bilkent from "./all-tabs/bilkent";
import Achievements from "./all-tabs/achievements";
import Experiences from "./all-tabs/experience";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState('welcome');

    const handleWelcome = () => {
        setActiveTab('welcome')
    }
    const handleAbout = () => {
        setActiveTab('about')
    }
    const handleExperiences = () => {
        setActiveTab('experiences')
    }
    const handleBilkent = () => {
        setActiveTab('bilkent')
    }
    const handleAchievements = () => {
        setActiveTab('achievements')
    }
    const handleProject = () => {
        setActiveTab('project')
    }
    const handleCourse = () => {
        setActiveTab('certificates')
    }

    const getTab = () => {
        switch(activeTab) {
            case 'welcome':
                return (<Welcome handleAbout={handleAbout}/>);
            case 'about':
                return (<About />);
            case 'experiences':
                return (<Experiences />);
            case 'bilkent':
                return (<Bilkent />);
            case 'achievements':
                return (<Achievements />)
            case 'project':
                return (<Projects />);
            case 'certificates':
                return (<Certificates />);
            default:
                return (<Welcome />);
        }
    }

    return (
        <div className="Tabs">
            <ul className="nav">
                <li className={activeTab === 'welcome' ? "active" : ""} onClick={ handleWelcome }>Welcome</li>
                <li className={activeTab === 'about' ? "active" : ""} onClick={ handleAbout }>About</li>
                <li className={activeTab === 'experiences' ? "active" : ""} onClick={ handleExperiences }>Experience</li>
                <li className={activeTab === 'bilkent' ? "active" : ""} onClick={ handleBilkent }>Bilkent</li>
                <li className={activeTab === 'achievements' ? "active" : ""} onClick={ handleAchievements }>Achievements</li>
                <li className={activeTab === 'project' ? "active" : ""} onClick={ handleProject }>Projects</li>
                <li className={activeTab === 'certificates' ? "active" : ""} onClick={ handleCourse }>Certificates</li>
            </ul>
            <div className="outlet">{ getTab() }
            </div>
        </div>
    );
};

export default Tabs;