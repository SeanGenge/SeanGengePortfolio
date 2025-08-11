import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projectData, Project } from '../app/projectData';
import { Box, Typography, ToggleButton, ToggleButtonGroup, Link } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function ProjectsGrid() {
	const [currFilter, setCurrFilter] = useState<string>("All");
	const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectData);
	const [firstLoad, setFirstLoad] = useState<boolean>(true);
	
	// useEffect(() => {
	// 	setImages(importImages(require.context('../../../public/images/projects', false, /\.(png|jpe?g|svg|webp)$/)));
	// 	setFilteredProjects(projectData);
	// }, []);
	
	// useMemo(() => {
	// 	const tmpProjectCards = filteredProjects.map((project, id) => {
	// 		return (
	// 			<Grid className={"project-card " + (firstLoad ? "hidden" : "")} key={id}>
	// 				<Box display="flex" justifyContent="center" padding="1em">
	// 					<ProjectCard project={project} imageData={images[project.image]} />
	// 				</Box>
	// 			</Grid>
	// 		);
	// 	});
		
	// 	setProjectCards(tmpProjectCards);
	// }, [images, filteredProjects, currFilter, firstLoad]);
	
	const handleChange = (event: React.MouseEvent<HTMLElement>, newFilter: string) => {
		const tempFilter = newFilter === null || newFilter === "" || newFilter === "All" ? "All" : newFilter;
		
		setCurrFilter(tempFilter);
		
		setFilteredProjects(projectData.filter(project => project.primaryLanguages.includes(tempFilter) || project.secondaryLanguages.includes(tempFilter) || tempFilter === "All"));
		
		setFirstLoad(false);
	};
	
	return (
		<Box textAlign="center" marginTop="5em" id="projects">
			<Typography variant="h3" className="hidden" sx={{marginBottom: "0.25em"}}>My Projects</Typography>
			<Typography variant="body2" className="hidden" sx={{ marginBottom: "2em" }}>
				You can view more of my projects on my
				<Link href="https://github.com/SeanGenge" target="_blank" underline="none" sx={{marginLeft: '0.3em'}}>
					GitHub
				</Link>
			</Typography>
			<ToggleButtonGroup
				color="primary"
				value={currFilter}
				exclusive
				onChange={handleChange}
				aria-label="Platform"
				className="hidden"
			>
				<ToggleButton value="All">All</ToggleButton>
				<ToggleButton value="React">React</ToggleButton>
				<ToggleButton value="Node.js">Node.js</ToggleButton>
			</ToggleButtonGroup>
			<Grid container justifyContent="center" alignItems="center" sx={{marginRight: '15rem', marginLeft: '15rem', marginTop: '1rem'}}>
				{filteredProjects.map((project, id) => (
				<Grid className={"project-card " + (firstLoad ? "hidden" : "")} key={id}>
					<Box display="flex" justifyContent="center" padding="1em">
						<ProjectCard project={project} imageData={project.image} />
					</Box>
				</Grid>
				))}
			</Grid>
		</Box>
	);
};