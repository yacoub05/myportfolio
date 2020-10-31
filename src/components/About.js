import React from 'react'
import './About.css'
import backend from '../assets/icons/backend.jpeg'
import frontend from '../assets/icons/frontend.png'
import competivecoder from '../assets/icons/competitivecoder.png'
import Skillcard from './Skillcard';

const skill = [

    {
        icon:frontend,
        title:"Frontend Development",
        about: "I can produce, maintain and modify websites and user interfaces using JS/HTML/CSS"
    
    },

    {
        icon:backend,
        title:"Backend Development",
        about: "Handle database, server, APIs using MongoDB, Node.js and mySQL"
    },

    {
        icon:competivecoder,
        title:"Competive Coder",
        about: "Work daily on solving problems in Hackerrank and Leetcode"
    }
]

const About =()=> {
    
        return (
            <div className="about">
                <div className="about_intro">
                    <h6 className="about_intro">
                        Recent Computer Science graduate seeking to use my web development experience in 
                        an entry-level position. Possess hands-on experience creating and testing applications 
                        for Artemis.

                    </h6>
                    <div className="container about_container">
                        <h6 className="about_heading"> What I offer</h6>
                            <div className="row">
                                {
                                   skill.map(skill =>
                                        
                                        <Skillcard skill ={skill}/>

                                    ) 
                                }
                            </div>
                    </div>
                </div>
            </div>

        );
};
export default About;