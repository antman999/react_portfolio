import React from 'react';
import Jump from 'react-reveal/Jump';
import Typist from 'react-typist';

const Home = ({ name, paragraph, authorImage }) => {
	return (
		<div>
			<div className='home_container'>
				<div className='home_head_wrapper'>
					<h1>
						Hi, I am Anthony.
						<Typist
							avgTypingDelay={120}
							cursor={{
								show: false,
								blink: false,
								element: '|',
								hideWhenDone: false,
							}}>
							<span className='spanny'>
								A recent bootcamp Gra{' '}
								<Typist.Backspace count={20} delay={200} />
								software developer
							</span>
							From New York
						</Typist>
					</h1>

					<p>{paragraph}</p>
				</div>
				<div className='image_container'>
					<img src={authorImage} alt='Author'></img>
					<div className='bg'></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
