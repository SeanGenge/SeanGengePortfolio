import React from "react";
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function AboutMe() {
	return (
		<Box id='about-me' className="separator-box">
			<Container>
				<Grid container>
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
				</Grid>
			</Container>
		</Box>
	);
};