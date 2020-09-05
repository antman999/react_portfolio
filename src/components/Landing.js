import React from 'react';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import data from '../yourdata';
import { TimeLine } from './TimeLine';
import Navbar from './Navbar'
import Skills from './Skills';
import Header from './Header';

const Landing = () => {
	return (
		<div className='App'>
			<Header bit={data.bit}/> 
			<Home
				
				name={data.landingPageName}
				paragraph={data.landingPagePara}
				authorImage={data.landingPageImage}></Home>
			<Work projects={data.projects}></Work>
			<Skills />
			<TimeLine />
			
			<Contact
				
				contactEmail={data.contactEmail}
				contactPara={data.contactPara}
				socialLinks={data.social}></Contact>
		</div>
	);
};

export default Landing;
