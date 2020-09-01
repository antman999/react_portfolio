import React from 'react'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { AiFillCode } from 'react-icons/ai';
import { GiBank, GiChicken } from 'react-icons/gi';

export const TimeLine = () => {
  return (
		<div>
			<div className='work_container'>
				<h1>Experience.</h1>
				<VerticalTimeline>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: '#414141', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid #414141' }}
						date=' Apr 2020 - Aug 2020'
						iconStyle={{ background: '#66FCF1', color: '#414141' }}
						icon={<AiFillCode />}>
						<h3 className='vertical-timeline-element-title'>Flatiron School</h3>
						<h4 className='vertical-timeline-element-subtitle'>New York, NY</h4>
						<p>
							Full-Stack Software engineering immersive program Where I deepened
							my knowledge of computer science, built full web applications using Ruby,
							Ruby On Rails, Javascript and React.js.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: '#414141', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid #414141' }}
						date='Apr 2019 - Apr 2020'
						iconStyle={{ background: '#F066FC', color: '#414141' }}
						icon={<GiBank />}>
						<h3 className='vertical-timeline-element-title'>
							Relationship Banker, Bank of America
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>New York, NY</h4>
						<p>
							Helped clients achieve their financial goals by utilizing
							technologies such as SSA, Salesforce and Interact.
							<br></br>
							<br></br>
							Continuously exceeded quarterly personal revenue goals and branch
							revenue.
							<br></br>
							<br></br>
							goals. Managed over 400+ client relationships including
							discovering new life events and keeping up with financial goals.
							<br></br>
							<br></br>
							Opened personal accounts + helped clients use other methods of
							banking such as our mobile app.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: '#414141', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid #414141' }}
						date='May 2018 - Apr 2019'
						iconStyle={{ background: '#66FCF1', color: '#414141' }}
						icon={<GiBank />}>
						<h3 className='vertical-timeline-element-title'>
							Personal Banker, People's United Bank
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>New York, NY</h4>
						<p>
							Engaged with clients by making outbound calls and appointments.
							<br></br>
							<br></br>
							Brought in over 1M+ in revenue by following the company road map
							for helping clients achieve their financial goals.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: '#414141', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid #414141' }}
						date='2018 - 2021'
						iconStyle={{ background: '#F066FC', color: '#414141' }}
						icon={<MdSchool />}>
						<h3 className='vertical-timeline-element-title'>
							Queensborough Community College
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>New York, NY</h4>
						<p>Associates Degree, Computer Science (still attending)</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						contentStyle={{ background: '#414141', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid #414141' }}
						className='vertical-timeline-element--education'
						date='Jun 2017 - Apr 2018'
						iconStyle={{ background: '#66FCF1', color: '#414141' }}
						icon={<GiChicken />}>
						<h3 className='vertical-timeline-element-title'>
							Senior Team Lead, Chick-fil-a
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>New York, NY</h4>
						<p>
							Developed all team members and train them according to our food
							and safety standards. <br></br>
							<br></br>
							Make cash orders and truck orders. In charge of hiring and on
							boarding new team members effectively. <br></br>
							<br></br> Set up catering events with local businesses and
							parties.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						contentStyle={{ background: '#414141', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid #414141' }}
						date='Sept 2016 - Jun 2017'
						iconStyle={{ background: '#F066FC', color: '#414141' }}
						icon={<GiChicken />}>
						<h3 className='vertical-timeline-element-title'>
							Team member, Chick-fil-a
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>New York, NY</h4>
						<p>First Job in high School</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
						icon=''
					/>
				</VerticalTimeline>
			</div>
		</div>
	);
}
