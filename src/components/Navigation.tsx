import { Box, Container, Button, Link } from '@mui/material';

export default function Navigation() {
	const paddingTop = 2;
	const paddingBottom = 1;
	const paddingRight = 5;
	
	return (
		<Container className='navbar' maxWidth={false}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', paddingTop: `${paddingTop}em`, paddingBottom: `${paddingBottom}em`, paddingRight: {xs: 0, sm: `${paddingRight}em`} }}>
				<Link href="#projects" underline="none">
					<Button variant="text" color="secondary">My Projects</Button>
				</Link>
				<Link href="#contact-me" underline="none">
					<Button variant="text" color="secondary">Contact Me</Button>
				</Link>
				<Link href="/seangengecv.pdf" target="_blank" underline="none"sx={{marginLeft: '2em'}}>
					<Button variant="outlined" color="secondary">Resume</Button>
				</Link>
			</Box>
		</Container>
	);
};