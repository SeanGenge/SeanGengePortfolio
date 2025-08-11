import React from "react";
import { Box, Typography, Container, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
	return (
		<Box id="footer" height="2rem" marginTop="2em" paddingTop="2em" paddingBottom="2em" sx={{ backgroundColor: '#072e82', color: 'white'}}>
			<Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<Typography variant="body1">
					Handcrafted by me using Next.js. Hosted with AWS
				</Typography>
				<Typography variant="body1">
					You can view my portfolio code <Link href="https://github.com/SeanGenge/SeanGengePortfolio" target="_blank" underline="none">here</Link> <CopyrightIcon sx={{ verticalAlign: "middle" }} /> 2025
				</Typography>
			</Container>
		</Box>
	);
};