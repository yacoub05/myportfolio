import React from 'react'
import './Resume.css'
import python from '../assets/icons/python.png';
import react from '../assets/icons/react.png'
import java from '../assets/icons/java.svg'
import javascript from '../assets/icons/javascript.jpeg'
import reactnative from '../assets/icons/reactnative.png'
import Bar from './Bar';
import css from '../assets/icons/css.png'
import slack from '../assets/icons/slack.jpeg'
import nodeexpress from '../assets/icons/node-express.png'
import crowdin from '../assets/icons/crowdin.png'
import docker from '../assets/icons/docker.jpg'
import html from '../assets/icons/html.jpeg'



const languages =[
    {
        icon: react,
        name:'React',
        level: '75'
    },
    {
        icon: java,
        name:'Java',
        level: '65'
    },
    {
        icon: reactnative,
        name:'React Native',
        level: '70'
    },
    {
        icon: nodeexpress,
        name:'Node.js/Express',
        level: '65'
    },
    {
        icon: css,
        name:'CSS',
        level: '80'
    },
    {
        icon: javascript,
        name:'Javascript',
        level: '75'
    }
    ,
    {
        icon: html,
        name:'HTML',
        level: '85'
    }
]

const tools =[
    {
        icon: crowdin,
        name:'Crowdin',
        level: '80'
    },
    {
        icon: slack,
        name:'Slack',
        level: '55'
    },
    {
        icon: docker,
        name:'Docker',
        level: '40'
    }

  
    
]



const Resume =()=> {
    
        return (
           <div className ="container resume">
               <div className="row">
                   <div className="col-lg-6 resumecard">
                        <h4 className="resumecard_heading">
                            Education
                        </h4>
                        <div className="resumecard_body">
                            <h5 className="resumecard_title">
                                Computer Science Engineering
                            </h5>
                            <p className="resumecard_name">
                                CUNY Lehman College
                            </p>
                            <p className="resumecard_details">I have graduated with a bachealors degree in december 2019</p>
                        </div>
                   </div>
                   <div className="col-lg-6 resumecard">
                        <h4 className="resumecard_heading">
                            Experience
                        </h4>
                        <div className="resumecard_body">
                            <h5 className="resumecard_title">
                                Web Developer
                            </h5>
                            <p className="resumecard_name">
                                Artemis 
                            </p>
                            <p className="resumecard_details">    • Participated in on-the-job training with senior computer programmers.
    • Wrote, tested, and altered the company’s web and mobile application to meet customer requirements.
    • Updated the mobile app to meet new operational language feature.
    • Tasked with improving user’s experience by creating a setting’s button that would translate the whole application
Tools/Technology:  React, React Native, Docker, Crowdin , VS code, Github , Slack</p><div className="col-lg-6 resumecard">
                       
                        </div>
                   </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 resume_languages">
                        <h5 className="resume-language_heading">
                            Language and Framework
                        </h5>
                        <div className="resume-language_body mr-3">
                            {
                                languages.map(language =>
                                    <Bar  value={language} />
                                    
                                    )
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 resume_languages">
                        <h5 className="resume-language_heading">
                            Tools and Softwares
                        </h5>
                        <div className="resume-language_body mr-3">
                            {
                                tools.map(tool => 
                                    <Bar value = {tool}/>
                                    
                                    )
                                
                            }
                        </div>
                    </div>
                </div>

               </div>
               

        
        );
};
export default Resume;