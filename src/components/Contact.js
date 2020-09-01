import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';

const Contact = ({ contactEmail, contactPara, socialLinks }) => {
	return (
		<div className='contact_container'>
		
				<h1>Lets get in touch.</h1>
			

			<p>{contactPara}</p>
			<br></br>
			<div className='background-two link-container'>
				<a className='link-two' href={`mailto:${contactEmail}`}>
					{contactEmail}
				</a>
			</div>
			<div className='social_links'>
				<ul>
					<li>
						<a href={`mailto:${contactEmail}`}>
							<FaEnvelope></FaEnvelope>
						</a>
					</li>
					<li>
						<a href={socialLinks[0].url}>
							<FaLinkedin></FaLinkedin>
						</a>
					</li>
					<li>
						<a href={socialLinks[1].url}>
							<FaGithub></FaGithub>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Contact;
