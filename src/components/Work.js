import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaYoutube, FaGithub } from 'react-icons/fa';
import { SiRails, SiJavascript } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
}));
const Work = ({ projects }) => {
	const classes = useStyles();
	return (
		<div id='work' className='work_container'>
			<h1>Projects.</h1>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#414141', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid #414141' }}
					iconStyle={{ background: '#61dafb', color: '#414141' }}
					icon={<FaReact />}>
					<div className={classes.root}>
						<Chip label='React.js' icon={<FaReact />} />
						<Chip label='Ruby On Rails' icon={<SiRails />} />
					</div>
					<p className='titleTimeline'>Our Planet (Conservation)</p>
					<p className='pTimeLine'>
						Built with React.js and Ruby on Rails as a back-end, SemanticUI for
						styling and Bcrypt gem.<br></br>
						<br></br>
						Utilized Google Maps API to allow users to pin if they have seen an
						animal in their allocated state. <br></br>
						<br></br>
						Application made interactive to users by allowing them to use a map
						to find the most at risk species of that state.
					</p>
					<Button
						className='vbutton'
						startIcon={<FaYoutube />}
						color='primary'
						variant='contained'
						href='https://www.youtube.com/watch?v=kZPOnKE9IEY'>
						Video
					</Button>
					{'  '}
					<Button
						className='vbutton'
						color='secondary'
						href='https://github.com/antman999/Animal-conservation'
						variant='contained'
						startIcon={<FaGithub />}>
						Code
					</Button>
				</VerticalTimelineElement>{' '}
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#414141', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid #414141' }}
					iconStyle={{ background: '#61dafb', color: '#414141' }}
					icon={<FaReact />}>
					<div className={classes.root}>
						<Chip label='React.js' icon={<FaReact />} />
						<Chip label='Ruby On Rails' icon={<SiRails />} />
					</div>
					<p className='titleTimeline'>PETS (Animal Welfare) </p>
					<p className='pTimeLine'>
						Engaging and compact pet adoption app designed to make it easier for
						the user to find their forever friend.<br></br>
						<br></br>
						PetFinder RESTful API used to access real adoptable animals.
						<br></br>
						<br></br>
						React.js + Ruby on Rails as a back-end API + Used bootstrap as a
						styling library + Bcrypt gem for authorization.
						<br></br>
						<br></br>
						Allowed a favorite System for users to favorite animals to showcase
						on their profile.
					</p>
					<Button
						className='vbutton'
						startIcon={<FaYoutube />}
						color='primary'
						href='https://youtu.be/JhNyHZVnSvI'
						variant='contained'>
						Video
					</Button>
					{'  '}
					<Button
						className='vbutton'
						color='secondary'
						variant='contained'
						href='https://github.com/antman999/mod4-project-frontend'
						startIcon={<FaGithub />}>
						Front-End
					</Button>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#414141', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid #414141' }}
					iconStyle={{ background: '#f8dd3d', color: '#fff' }}
					icon={<SiJavascript />}>
					<div className={classes.root}>
						<Chip label='Vanilla JS' icon={<SiJavascript />} />
						<Chip label='Ruby On Rails' icon={<SiRails />} />
					</div>
					<p className='titleTimeline'>FlatSpace (Social Media) </p>
					<p className='pTimeLine'>
						Single page social media app. Wanted to bring what we believe are
						the most important aspects of sharing your life which are photos,
						posts and a music player to allow the user to have it all in one
						page.<br></br>
						<br></br>
						Built with vanilla JavaScript and Ruby on Rails.
						<br></br>
						<br></br>
						User could make status posts to share any details with their Group
						<br></br>
						<br></br>
						Full rails authorization added to allow a safe login/signup.
					</p>
					<Button
						className='vbutton'
						color='secondary'
						variant='contained'
						href='https://github.com/steveneross94/Mod3FinalProject'
						startIcon={<FaGithub />}>
						Back-End
					</Button>
					{'  '}
					<Button
						className='vbutton'
						color='secondary'
						variant='contained'
						href='https://github.com/steveneross94/Mod3FinalProject'
						startIcon={<FaGithub />}>
						Front-End
					</Button>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#414141', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid #414141' }}
					iconStyle={{ background: '#d61101', color: '#fff' }}
					icon={<DiRuby />}>
					<div className={classes.root}>
						<Chip label='Ruby' icon={<DiRuby />} />
					</div>
					<p className='titleTimeline'>Bank of NYC (Banking) </p>
					<p className='pTimeLine'>
						Leveraged banking experience to build a command line banking app
						where users can do all their banking in.<br></br>
						<br></br>
						Built with Ruby, used Object Oriented Programming to have clean and
						easy to read code.
						<br></br>
						<br></br>
						Used Active Record to store in-memory object data in a SQLite
						relational database.
						<br></br>
						<br></br>
						Users are able to make Zelle like transfers using Usernames and
						based on balances users can qualify for premium accounts.
					</p>
					<Button
						className='vbutton'
						startIcon={<FaYoutube />}
						color='primary'
						href='https://youtu.be/o1HTbxdLyA8'
						variant='contained'>
						Video
					</Button>
					{'  '}
					<Button
						className='vbutton'
						color='secondary'
						variant='contained'
						href='https://github.com/antman999/CLI-Bank-Project'
						startIcon={<FaGithub />}>
						Front-End
					</Button>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
					icon=''
				/>
			</VerticalTimeline>
		</div>
	);
};

export default Work;
