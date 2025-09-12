function Welcome(props) {

    const handleAbout = () => {
        props.handleAbout();
    }

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/akmami/');
    }

    const handleGitHub = () => {
        window.open('https://github.com/akmami/');
    }
    
    const handleLeetCode = () => {
        window.open('https://leetcode.com/akmami/');
    }

    return (
        <div className="welcome">
            <img className="image" src={require('../../assets/akmuhammet.png')} alt='' />
            <div className="center">
                <label className="hi">Hi, I'm Akmuhammet.</label>
                <br/>
                <label className="CS">M.S. in Computer Science graduate</label>          
                <br/>
                <label className="more">More information in </label> 
                    <label className="more about" onClick={handleAbout}>About</label>
                <label className="more"> page</label>
                <br/>
            </div>
            <div className="contact">
                <img className="contactImage" src={require('../../assets/linkedin.png')} alt='' />
                <label> : </label>
                <label className="clickable" onClick={handleLinkedIn}>akmami</label>
                <label> </label>
                
                <img className="contactImage" src={require('../../assets/github.png')} alt='' />
                <label> : </label>
                <label className="clickable" onClick={handleGitHub}>akmami</label>
                <label> </label>

                <img className="contactImage" src={require('../../assets/leetcode.png')} alt='' />
                <label> : </label>
                <label className="clickable" onClick={handleLeetCode}>akmami</label> <br/>
                
                <label className="email">Email: &nbsp;</label> 
                <img className="emailImage" src={require('../../assets/email.png')} alt='' />
                
            </div>
        </div>
    )
}

export default Welcome;