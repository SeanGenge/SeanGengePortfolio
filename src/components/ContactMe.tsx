import React from "react";
import { Box, Typography, Container, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactMe() {
	const iconSize = 2.5;
	const iconMargin = 0.2;
	
	return (
		<Box id="contact-me" textAlign="center" marginTop="5em">
			<Typography variant="h3" className="hidden" sx={{ marginBottom: "0.25em" }}>Contact Me</Typography>
			<Typography variant="body2" className="hidden" sx={{ marginBottom: "2em" }}>
				You can contact me at
				<Link href="mailto:seangenge@gmail.com" target="_blank" underline="none" sx={{ marginLeft: '0.3em' }}>
					seangenge@gmail.com
				</Link>
				, or you can use the links below
			</Typography>
			<Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<Typography variant="body1">
					<Link href="mailto:seangenge@gmail.com" underline="none">
						<EmailIcon sx={{ verticalAlign: "middle", fontSize: `${iconSize}rem`, margin: `${iconMargin}em` }} />
					</Link>
					<Link href="https://github.com/SeanGenge" target="_blank" underline="none">
						<GitHubIcon sx={{ verticalAlign: "middle", fontSize: `${iconSize}rem`, margin: `${iconMargin}em` }} />
					</Link>
					<Link href="https://www.linkedin.com/in/seangenge/" target="_blank" underline="none">
						<LinkedInIcon sx={{ verticalAlign: "middle", fontSize: `${iconSize}rem`, margin: `${iconMargin}em` }} />
					</Link>
				</Typography>
			</Container>
		</Box>
	);
};