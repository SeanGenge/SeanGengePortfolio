import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { importImages } from '../util/util';
import { projectData, Project } from '../app/projectData';
import { Box, Typography, Container, ToggleButton, ToggleButtonGroup, Link } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function ProjectsGrid() {
	const [images, setImages] = useState([]);
	const [currFilter, setCurrFilter] = useState("All");
	const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectData);
	const [firstLoad, setFirstLoad] = useState(true);
	
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
	
	// const handleChange = (event, newFilter) => {
	// 	setCurrFilter(newFilter);
		
	// 	setFilteredProjects(projectData.filter(project => project.primaryLanguages.includes(newFilter) || project.secondaryLanguages.includes(newFilter) || newFilter === "All"));
		
	// 	setFirstLoad(false);
	// };
	
	return (
		<Box textAlign="center" marginTop="5em">
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
				// onChange={handleChange}
				aria-label="Platform"
				className="hidden"
			>
				<ToggleButton value="All">All</ToggleButton>
				<ToggleButton value="React">React</ToggleButton>
				<ToggleButton value="Node.js">Node.js</ToggleButton>
			</ToggleButtonGroup>
			<Grid container id="projects" justifyContent="center" alignItems="center" sx={{marginRight: '15rem', marginLeft: '15rem', marginTop: '1rem'}}>
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