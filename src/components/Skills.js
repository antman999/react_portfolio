import React from 'react'
import { SiRails, SiJavascript } from 'react-icons/si';
const SKILLS_LIST = [
	{
		label: 'HTML5/CSS3 - 95%',
		percentage: '95%',
	},
	{
		label: 'ES6 / 70%',
		percentage: '70%',
	},
	{
		label: 'React - 82%',
		percentage: '82%',
	},
	{
		label: 'Bootstrap/SemanticUI - 100%',
		percentage: '100%',
	},
	{
		label: 'Ruby - 65%',
		percentage: '65%',
	},
	{
		label: 'Ruby on Rails - 90%',
		percentage: '90%',
	},
	{
		label: 'OOP - 65%',
		percentage: '65%',
	},
];
const ProgressLine = ({ label, percentage, barBg, progresBg, barHeight }) => {
	const [widths, setWidths] = React.useState(0);

	React.useEffect(() => {
		requestAnimationFrame(() => setWidths(percentage));
	}, [percentage]);

	return (
		
		<section className='progress-line'>
			<span className='progress-line__label'>{label}</span>
			<div
				className='progress-line__outer'
				style={{
					background: barBg,
					height: `${barHeight}px`,
				}}>
				<div
					className='progress-line__inner'
					style={{
						width: widths,
						background: progresBg,
						transition: 'width 2s',
					}}
				/>
			</div>
		</section>
	);
};

const Skills = () => (
	<div id='skills' className='work_container'>
		<section className='container'>
			<div className='row'>
				<div className='col-12 pt-5'>
					<h1>Skills.</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-12 py-5'>
					{SKILLS_LIST.map((
						skill,
						index // index: static values
					) => (
						<ProgressLine
							key={index}
							barHeight='15'
							barBg='#efefef'
							progresBg='#f24136'
							label={skill.label}
							percentage={skill.percentage}
						/>
					))}
				</div>
			</div>
		</section>
	</div>
);

export default Skills
