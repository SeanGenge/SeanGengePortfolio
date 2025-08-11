export interface Project {
	name: string;
	description: string;
	image: string;
	github: string;
	deployed: string | null;
	primaryLanguages: string[];
	secondaryLanguages: string[];
}

export const projectData: Project[] = [
	// {
	//     "name": "Wolfies",
	//     "description": "View/search movie information",
	//     "image": "Wolfies.webp",
	//     "github": "https://github.com/SeanGenge/Wolfies",
	//     "deployed": null,
	//     "secondaryLanguages": ["React", "JavaScript", "TheMovieDB API", "HTML", "CSS", "Bootstrap", "SCSS", "Node.js"]
	// },
	// {
	// 	"name": "Farmers Market Organisator",
	// 	"description": "Organize markets to rent out to stallholders or find products as a shopper",
	// 	"image": "farmersMarketOrganiser.webp",
	// 	"github": "https://github.com/rschragger/Farmers-Market-Organiser",
	// 	"deployed": "https://farmers-market-organiser-app.herokuapp.com/",
	// 	"primaryLanguages": ["JavaScript", "express", "handlebar.js"],
	// 	"secondaryLanguages": ["HTML", "CSS", "Moment.js", "Bootstrap", "Multer", "validator.js", "heroku", "Node.js"]
	// },
	{
		"name": "Github Readme Generator",
		"description": "Simple UI for generating readme files",
		"image": "readmeGenerator.webp",
		"github": "https://github.com/SeanGenge/Github-Readme-Generator",
		"deployed": "https://generate-github-readme.herokuapp.com/",
		"primaryLanguages": ["JavaScript", "express", "handlebar.js"],
		"secondaryLanguages": ["Heroku", "Handlebar.js", "HTML", "CSS", "Node.js"]
	},
	{
		"name": "Movies and music db",
		"description": "View/search movie and album information",
		"image": "m_mDB.webp",
		"github": "https://github.com/SeanGenge/m-mDB",
		"deployed": "https://seangenge.github.io/m-mDB/",
		"primaryLanguages": ["JavaScript", "TheMovieDB API"],
		"secondaryLanguages": ["HTML", "CSS", "MaterializeCSS", "TheAudioDB API"]
	},
	{
		"name": "Weather App",
		"description": "View weather information on any city",
		"image": "Weather.webp",
		"github": "https://github.com/SeanGenge/Weather",
		"deployed": "https://seangenge.github.io/Weather/",
		"primaryLanguages": ["JavaScript", "Bootstrap", "Weather API"],
		"secondaryLanguages": ["HTML", "CSS"]
	},
	{
		"name": "Note taker",
		"description": "Add/Save notes and revisit",
		"image": "noteTaker.webp",
		"github": "https://github.com/SeanGenge/Note-taker",
		"deployed": "https://sean-note-taker.herokuapp.com/notes",
		"primaryLanguages": ["JavaScript", "express", "Heroku"],
		"secondaryLanguages": ["HTML", "CSS", "Node.js"]
	},
	{
		"name": "Fill",
		"description": "Fill the board with one colour or make a pattern",
		"image": "Fill.webp",
		"github": "https://github.com/SeanGenge/Fill",
		"deployed": "https://seangenge.github.io/Fill/",
		"primaryLanguages": ["React", "JavaScript", "Node.js"],
		"secondaryLanguages": ["HTML", "Babel", "Webpack", "CSS"]
	},
	{
	    "name": "Work day scheduler",
	    "description": "Add notes for today. Colour coded to see the current time",
	    "image": "WorkDayScheduler.webp",
	    "github": "https://github.com/SeanGenge/Work-day-scheduler",
	    "deployed": "https://seangenge.github.io/Work-day-scheduler/",
		"primaryLanguages": ["JavaScript"],
	    "secondaryLanguages": ["HTML", "CSS", "Moment.js", "Bootstrap"]
	}
];

export default projectData;