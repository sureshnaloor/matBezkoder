import React, {useState, useEffect} from 'react'

import ProjectDataService from '../../services/Projects';
import ProjectsList from '../../components/projects/ProjectsList';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [isLoading, setLoading] = useState(true);
    const [currentProject, setCurrentProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
	const [searchProjectname, setSearchProjectname] = useState('');
	
    
    const setActiveProject = (project, index) => {
		setCurrentProject(project);
		setCurrentIndex(index);
	};

	const onChangeSearchProjectname = (e) => {
		const searchProjectname = e.target.value;
		setSearchProjectname(searchProjectname);
		console.log(searchProjectname);
	};

	const findByProjectname = async () => {
		try {
			const response = await ProjectDataService.findByProjectname(searchProjectname)			
			setProjects(response.data);
			console.log(response.data);			
		} catch (error) {
			console.log(error)
		}		
	};
	useEffect(() => {
		retrieveProjects();
	}, []);

	const retrieveProjects = async () => {
		await setLoading(true);
		const response = await ProjectDataService.getAll()
		await setProjects(response.data);
		await setLoading(false);
		console.log(response);
	};

	if (isLoading) {
		return (
			<>
				<h5> Loading.....</h5>
			</>
		);
	} else {

	return(
	<div className='minhtcont'>
		
		<ProjectsList 
			projects = {projects}
			setActiveProject ={setActiveProject}
			currentProject={currentProject}
			searchProjectname = {searchProjectname}
			findByProjectname = {findByProjectname}	
			onChangeSearchProjectname= {onChangeSearchProjectname}
		
		/>
	</div>)
};
	
}

export default Projects 

