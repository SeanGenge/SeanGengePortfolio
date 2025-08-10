import React from "react";
import { Box, Typography, Container, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
	return (
		<Box id="footer" className="separator-box" height="4rem" marginTop="5em" paddingBottom="5em">
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