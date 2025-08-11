import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Link, Button } from '@mui/material';
import RubiksCube from '../components/RubiksCube';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Hero() {
	return (
		<section id="hero" className='section-blue'>
			<Grid container className="no-margin">
				<Grid container size={5} justifyContent="center" alignItems="center">
					<RubiksCube moves={""} />
				</Grid>
				<Grid container justifyContent="center" alignItems="center">
					<Grid size={12} className="hidden">
						<Typography variant="h2">
							Sean Genge
						</Typography>
						<Typography variant="body1">
							A Full Stack Developer
						</Typography>
					</Grid>
					<Grid size={12}>
						<Link href="#projects" underline="none" className='hidden'>
							<Button variant="outlined" color="secondary">View my projects</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
			<Link href="#about-me">
				<KeyboardDoubleArrowDownIcon sx={{
					animation: 'bounce 2s infinite',
					fontSize: 40,
					color: 'white'
				}} />
			</Link>
		</section>
	);
}