import React from "react";
import { Box, Typography, Container, Card, CardMedia, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function AboutMe() {
	const cardWidth = 70;
	const cardMediaHeight = 15;
	
	return (
		<Box id='about-me'>
			<Container sx={{ marginTop: '5rem' }}>
				<Card className="rounded" sx={{ display: 'flex', flexDirection: 'row', position: 'relative', width: `${cardWidth}rem`, marginTop: '1em', marginBottom: '1em', marginLeft: '0.25em', marginRight: '0.25em' }}>
					<CardMedia
						sx={{ width: "70%", height: `${cardMediaHeight}rem`, margin: '1rem' }}
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
				{/* <Grid container>
					<Grid columnSpacing={{ xs: 12, sm: 4 }}>
						<img className="pfp hidden" src="./images/pfp.webp" alt="Sean Genge" />
					</Grid>
					<Grid columnSpacing={{xs: 12, sm: 6}}  className="hidden">
						<Typography variant="h5">
							Hi, I'm Sean. Nice to meet you
						</Typography>
						<Typography variant="body2">
							With a Computer Science background, I have played around with many different programming languages. These range from Python, C#, Java and C++. Later on I learnt web development and fell in love with it. I love the freedom of being able to design both the front-end and back-end and being able to have both work in harmony with one another.
						</Typography>
						<Typography variant="body2">
							Some of my hobbies include playing video games, these can include but are not limited to Final Fantasy 14, Left 4 dead 2, Team fortress 2 and osu!. I also enjoy playing and solving puzzles, for instance, the Rubik's cube or even something like an escape room. I love to just take strolls in nature and just let my mind process problems or plan what I would love to tackle next.
						</Typography>
					</Grid>
				</Grid> */}
			</Container>
		</Box>
	);
};