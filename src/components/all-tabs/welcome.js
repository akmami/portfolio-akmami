import React from "react";

function Welcome(props) {

    const handleAbout = () => {
        props.handleAbout();
    }

    return (
        <div className="welcome">
            <img className="image" src={require('../../assets/akmuhammet.jpg')} alt='' />
            <div className="center">
                <label className="hi">Hi, I'm Akmuhammet.</label>
                <br/>
                <label className="CS">I'm Sr. Comupter Science Student</label>
                <br/>
                <label className="SWE"> + </label>
                <br/>
                <label className="SWE">Software Engineer Candidate</label>
                <br/>
                <label className="more">More information in </label> 
                    <label className="more about" onClick={handleAbout}>About</label>
                <label className="more"> page</label>
                <br/>
            </div>
        </div>
    )
}

export default Welcome;