import React from 'react';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';

import data from '../yourdata';
import { TimeLine } from './TimeLine';

const Landing = () => {
	return (
		<div className='App'>
			<Header bit={data.bit} name={data.name} contactEmail={data.contactEmail}></Header>
			<Home
				name={data.landingPageName}
				paragraph={data.landingPagePara}
				authorImage={data.landingPageImage}></Home>
			<TimeLine />
			<Work projects={data.projects}></Work>
			<Contact
				contactEmail={data.contactEmail}
				contactPara={data.contactPara}
				socialLinks={data.social}></Contact>
		</div>
	);
};

export default Landing;
