import React, { Component } from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

class Navbar extends Component {
	state = {};
	scrollToTop = () => {
		scroll.scrollToTop();
	};
	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link
							className='link'
							activeClass='active'
							to='work'
							spy={true}
							smooth={true}
							offset={-70}
							duration={800}>
							Projects
						</Link>
					</li>
					<li>
						<Link
							className='link'
							activeClass='active'
							to='skills'
							spy={true}
							smooth={true}
							offset={-70}
							duration={800}>
							Skills
						</Link>
					</li>
					<li>
						<Link
							className='link'
							activeClass='active'
							to='time'
							spy={true}
							smooth={true}
							offset={-70}
							duration={800}>
							Experience
						</Link>
					</li>

					<li>
						<Link
							className='link'
							activeClass='active'
							to='contact'
							spy={true}
							smooth={true}
							offset={-70}
							duration={800}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
