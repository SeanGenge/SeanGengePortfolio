import { Card, CardActions, CardContent, CardMedia, Button, Typography, Skeleton, Link, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { Project } from '../app/projectData';
import { useState, useEffect } from 'react';

type ProjectCardProps = {
	project: Project,
	imageData: string
}

export default function ProjectCard({ project, imageData }: ProjectCardProps) {
	const [image, setImage] = useState<string>("");
	const primaryLanguages = project.primaryLanguages.map((language, id) => {
		return (
			<Grid key={id} sx={{marginRight: '.5em'}}>
				<Chip color="primary" variant="outlined" label={language} sx={{padding: '0.2rem'}} />
			</Grid>
		);
	});
	
	useEffect(() => {
		setImage(imageData);
	}, [imageData]);
	
	const cardWidth = 25;
	const cardHeight = 35;
	const cardMediaHeight = 15;
	// 5 is how much room you want left over at the bottom of the card
	const cardContentHeight = cardHeight - cardMediaHeight - 5;
	
	return (
		<Card className="rounded project-card" sx={{ position: 'relative', width: {xs: '100%', md: `${cardWidth}rem`}, minHeight: `${cardHeight}rem`, marginTop: '1em', marginBottom: '1em', marginLeft: {xs: 0, md: '0.25em'}, marginRight: {xs: 0, md: '0.25em'} }}>
			{
				image ?
					<CardMedia
						sx={{ height: `${cardMediaHeight}rem` }}
						image={`/images/projects/${image}`}
						title={project.name}
						className='card-media'
					/>
					:
					<Skeleton animation="wave" variant="rectangular" height={140} />
			}
			<CardContent
				sx={{ height: `${cardContentHeight}rem` }}>
				<Typography gutterBottom variant="h6" component="div" sx={{minHeight: '70px'}}>
					{project.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{project.description}
				</Typography>
				<Grid container rowSpacing={2} sx={{ position: 'absolute', bottom: '60px' }}>
					{primaryLanguages}
				</Grid>
			</CardContent>
			<CardActions>
				<Button size="small" startIcon={<GitHubIcon />} href={project.github} underline="none" target="_blank" component={Link}>
					Github
				</Button>
				<Button size="small" startIcon={<OpenInBrowserIcon />} href={project.deployed ? project.deployed : ""} underline="none" target="_blank" component={Link}>
					View Website
				</Button>
			</CardActions>
		</Card>
	);
};