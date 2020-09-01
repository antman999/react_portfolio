import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Work = ({ projects }) => {
	return (
		<div className='work_container'>
			<h1>Projects.</h1>
			<div className='projects_container'>
				{projects.map(project => (
					<div className='card' key={project.id}>
						<div className='icon'>
							<a href={project.url}>
									<i className='material-icons md-36'>
								<img src={project.imageSrc}></img>
							</i>
							</a>
						
						</div>
						<p className='title'>{project.title}</p>
						<p class='text'>Click to see Video.</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
