import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
// import { Scale } from '@mui/icons-material';

export default function Hero() {
	return (
		<section id="hero">
			<Grid container rowSpacing={2} className="no-margin">
				<Grid columnSpacing={{xs: 12}}>
					<Typography variant="h2" className="hidden">
						Sean Genge
					</Typography>
				</Grid>
				<Grid columnSpacing={{ xs: 12 }}>
					<Typography variant="body1" className="hidden">
						A Full Stack Developer
					</Typography>
				</Grid>
				{/* <Grid xs={12} sx={{margin: "auto", transform: {xs: "scale(0.75)", md: "scale(1)"}, width: {xs: "100%", md: "20%"}}}>
					<Spline className="hidden" scene="https://prod.spline.design/7savUsYJTYmiaC8d/scene.splinecode" />
				</Grid> */}
			</Grid>
		</section>
	);
}