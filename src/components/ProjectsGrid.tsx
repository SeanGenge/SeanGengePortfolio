import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { importImages, observeAnimateOnScroll } from '../util/util';
import projectData from '../projectData.js';
import { Box, Typography, Container, ToggleButton, ToggleButtonGroup, Link } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function ProjectsGrid() {
	const [images, setImages] = useState([]);
	const [currFilter, setCurrFilter] = useState("All");
	const [projectCards, setProjectCards] = useState([]);
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [firstLoad, setFirstLoad] = useState(true);
	
	useEffect(() => {
		setImages(importImages(require.context('../../../public/images/projects', false, /\.(png|jpe?g|svg|webp)$/)));
		setFilteredProjects(projectData);
	}, []);
	
	useEffect(() => {
		const cards = document.querySelectorAll(".project-card");
		
		cards.forEach((el) => observeAnimateOnScroll.observe(el));
	}, [projectCards]);
	
	useEffect(() => {
		const tmpProjectCards = filteredProjects.map((project, id) => {
			return (
				<Grid2 className={"project-card " + (firstLoad ? "hidden" : "")} xs={12} md={4} key={id}>
					<Box display="flex" justifyContent="center" padding="1em">
						<ProjectCard project={project} imageData={images[project.image]} />
					</Box>
				</Grid2>
			);
		});
		
		setProjectCards(tmpProjectCards);
	}, [images, filteredProjects, currFilter, firstLoad]);
	
	const handleChange = (event, newFilter) => {
		setCurrFilter(newFilter);
		
		setFilteredProjects(projectData.filter(project => project.primaryLanguages.includes(newFilter) || project.secondaryLanguages.includes(newFilter) || newFilter === "All"));
		
		setFirstLoad(false);
	};
	
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
				onChange={handleChange}
				aria-label="Platform"
				className="hidden"
				
			>
				<ToggleButton value="All">All</ToggleButton>
				<ToggleButton value="React">React</ToggleButton>
				<ToggleButton value="Node.js">Node.js</ToggleButton>
			</ToggleButtonGroup>
			<Container>
				<Grid2 id="projects" container rowSpacing={2} className="no-margin">
					{projectCards}
				</Grid2>
			</Container>
		</Box>
	);
};