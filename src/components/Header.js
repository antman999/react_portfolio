import React from 'react'
import Navbar from './Navbar'

const Header = (data) => {
  return (
		<div>
			<div className='header_container'>
				<img className='bit' src={data.bit}></img>
				<Navbar />
			</div>
		</div>
	);
}

export default Header
