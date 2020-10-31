import React from 'react'
import './Skillcard.css'

const Skillcard =({ skill: {icon,title,about}})=> 
<div className="col-lg-6">
     <div className="skill-card">
        <img src ={icon} alt="icon" className="skillcard_icon"/>
            <div className="skillcard_body">
                  <h6 className="skillcard_title">{title}</h6>
                     <p className="skillcard_content">{about}</p>
             </div>
            </div>
    </div>   
        
    


export default Skillcard;
