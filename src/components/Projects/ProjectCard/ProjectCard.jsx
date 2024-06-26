import React from "react";
import './ProjectCard.css'

const ProjectCard=({details})=>{
    return(
        <div className="project-card">
            <h6>{details.Title}</h6>
            
            <div className="project-technologies">{details.technologies}</div>

            <ul>
                {details.describes.map((item)=>{
                    return(
                    <li key={item}>{item}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default ProjectCard