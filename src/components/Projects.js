import React, {useState} from 'react'
import projects_data from './data/projects_data'
import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects =()=> {

    const [projects, setProjects] = useState(projects_data)

    const handleFilterCategory = (name) => {
        const new_array = projects_data.filter(project => project.category.includes(name))
        setProjects(new_array)
    }
    
        return (
            <div className="container projects">
                <div className="projects__navbar">
                <div onClick={() => setProjects(projects_data)}>All</div>
                <div onClick={() => handleFilterCategory('react.js')}>React</div>
                <div onClick={() => handleFilterCategory('mongoDB')}>MongoDB</div>
                <div onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
            </div>    




                <div className="row">
                    {
                        projects.map(project =>
                            <ProjectCard key={project.name} project ={project}/>
                            )
                    }

                </div>
            </div>
        );
};
export default Projects;

