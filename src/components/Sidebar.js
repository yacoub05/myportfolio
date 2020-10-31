import React from 'react';
import facebook from '../assets/icons/facebook.png'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import profile from '../assets/icons/profile.jpg'
import resume from '../assets/icons/resume.png'
import location from '../assets/icons/location.svg'
import resumefile from '../assets/icons/resumefile.docx'


const Sidebar = ()=>{
    const handlemailMe = () =>{
        window.open("mailto:yacoub.abakar@lc.cuny.edu")
    }
    return(
        <div className ="sidebar">
            <img src ={profile} alt="profile " className= "sidebar_profileimage"/>
            <div className="sidebar_name"> Yacoub <span> Abakar</span></div>
            <div className="sidebar_item sidebar_title">Web Developer</div>
            <a href={resumefile}>
                <div className="sidebar_item sidebar_resume">
                    <img src={resume} alt="" className="sidebar_icon" /> Download Resume
                </div>
            </a>
            <div className="sidebar_social_icon my-2">
            <a href= ""><img src={facebook} alt="facebook" className="sidebar_facebook sidebar_icon mr-3" /></a> 
            <a href="https://www.linkedin.com/in/yacoub-abakar/"><img src={linkedin} alt="Linkedin" className="sidebar_linkedin sidebar_icon mr-3" /></a>
            <a href=""><img src={github} alt="Github" className="sidebar_github sidebar_icon" /> </a>

            </div>
            <div className="sidebar_contact">
               
                <div className="sidebar_location">
                <img src={location} alt="location" className="sidebar_icon mr-3" /> 
                    New York, NY</div>
                <div className="sidebar_item"> yacoub.abakar@lc.cuny.edu</div>
                <div className="sidebar_item">9176839793</div>  
            </div>
            <div className="sidebar_item sidebar_email" onClick={handlemailMe}>Email me</div>
        </div>

    )
}

export default Sidebar;