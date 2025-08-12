import React from "react";
import { Box, Typography, Container, Card, CardMedia, CardContent } from '@mui/material';

export default function AboutMe() {
	const cardWidth = 70;
	const cardMediaHeight = 15;
	
	return (
		<Box id='about-me'>
			<Container sx={{ marginTop: '5rem', padding: {xs: 0} }} className="hidden">
				<Card className="rounded" sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, position: 'relative', width: {xs: '100%', sm: `${cardWidth}rem`}, marginTop: {xs: 0, sm: '1em'}, marginBottom: { xs: 0, sm: '1em'}, marginLeft: {xs: 0, sm: '0.25em'}, marginRight: {xs: 0, sm: '0.25em'} }}>
					<CardMedia
						sx={{ width: {xs: "100%", sm: "70%"}, height: `${cardMediaHeight}rem`, margin: {xs: 0, sm: '1rem'} }}
						image={"/images/pfp.webp"}
						title="Portrait of Sean Genge"
						className='card-media rounded'
					/>
					<CardContent>
						<Typography variant="h4">
							Hi, I&apos;m Sean.
						</Typography>
						<Typography gutterBottom variant="body1" component="div">
							I recently completed my Master&apos;s of Artificial Intelligence with a background in Computer Science. I have dabbled in programming languages such as SQL, C#.NET, python and modern web technologies. I have previously worked as a Full stack developer for 2 years, working in a small agile team where I helped develop features and maintain half a dozen websites. My AI work includes developing an SMS scam detection tool for migrant workers visiting the country for the first time.
						</Typography>
						<Typography gutterBottom variant="body1" component="div">
							Outside of work, I love solving problems and enjoy challenges, from solving Rubik&apos;s cubes as fast as possible or escape rooms to playing games like Team fortress 2. I also love nature walks, using the time to think, plan and find inspiration for what I want to build next.
						</Typography>
					</CardContent>
				</Card>
			</Container>
		</Box>
	);
};