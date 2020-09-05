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
			<div id='time' className='work_container'>
				<h1>Experience.</h1>
				<VerticalTimeline>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: '#414141', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid #414141' }}
						date=' Apr 2020 - Aug 2020'
						iconStyle={{ background: '#66FCF1', color: '#414141' }}
						icon={<AiFillCode />}>
						<p className='expTitle'>Flatiron School</p>
						<p className='expTitle'>New York, NY</p>
						<p>
							Full-Stack Software engineering immersive program Where I deepened
							my knowledge of computer science, built full web applications
							using Ruby, Ruby On Rails, Javascript and React.js.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: '#414141', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid #414141' }}
						date='Apr 2019 - Apr 2020'
						iconStyle={{ background: '#F066FC', color: '#414141' }}
						icon={<GiBank />}>
						<p className='expTitle'>Relationship Banker, Bank of America</p>
						<p className='expTitle'>New York, NY</p>
						<p>
							Helped clients achieve their financial goals by utilizing
							technologies such as SSA, Salesforce and Interact.
							<br></br>
							<br></br>
							Continuously exceeded quarterly personal revenue goals and branch
							revenue goals.
							<br></br>
							<br></br>
							Managed over 400+ client relationships including discovering new
							life events and keeping up with financial goals.
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
						<p className='expTitle'>Personal Banker, People's United Bank</p>
						<p className='expTitle'>New York, NY </p>
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
						<p className='expTitle'>Queensborough Community College</p>
						<p className='expTitle'>New York, NY</p>
						<p>Associates Degree, Computer Science (still attending)</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						contentStyle={{ background: '#414141', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid #414141' }}
						className='vertical-timeline-element--education'
						date='Jun 2017 - Apr 2018'
						iconStyle={{ background: '#66FCF1', color: '#414141' }}
						icon={<GiChicken />}>
						<p className='expTitle'>Senior Team Lead, Chick-fil-a</p>
						<p className='expTitle'>New York, NY</p>
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
						<p className='expTitle'>Team member, Chick-fil-a</p>
						<p className='expTitle'>New York, NY</p>
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
