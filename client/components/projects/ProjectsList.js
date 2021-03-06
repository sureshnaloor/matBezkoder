import React from 'react'
import ProjectsCardFull from './ProjectsCardFull'

const ProjectsList = ({
    projects,
	setActiveProject,
	currentProject,
    searchProjectname,    
	findByProjectname,	
	onChangeSearchProjectname,
}) => {
    return (
        <div>
            
            < ProjectsCardFull 
            projects={projects}
            setActiveProject = {setActiveProject}
            currentProject={currentProject}
            searchProjectname={searchProjectname}
            findByProjectname={findByProjectname}
            onChangeSearchProjectname={onChangeSearchProjectname}
            />
        </div>
    )
}

export default ProjectsList
