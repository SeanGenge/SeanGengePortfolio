import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Link, Button } from '@mui/material';
import RubiksCube from '../components/RubiksCube';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Hero() {
	return (
		<section id="hero" className='section-blue'>
			<Grid container spacing={10} sx={{minHeight: '90vh'}} className='hidden'>
				<Grid container size={6} alignItems="center" className='hidden'>
					<RubiksCube moves={""} />
				</Grid>
				<Grid container size={6} spacing={4} direction="column" justifyContent="center" alignItems="center" className='hidden'>
					<Typography variant="h2">
						Sean Genge
					</Typography>
					<Typography variant="body1">
						A Full Stack Developer
					</Typography>
					<Link href="#projects" underline="none">
						<Button variant="outlined" color="secondary">View my projects</Button>
					</Link>
				</Grid>
			</Grid>
			<Link href="#about-me">
				<KeyboardDoubleArrowDownIcon sx={{
					animation: 'bounce 2s infinite',
					fontSize: 40,
					color: 'white'
				}} />
			</Link>
			<svg
				className="wave"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#072e82"  /* Your custom blue */
					fillOpacity="1"
					d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,160C672,139,768,117,864,101.3C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				/>

			</svg>
		</section>
	);
}