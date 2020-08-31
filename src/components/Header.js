import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


import { Link } from 'react-router-dom';

import data from '../yourdata';
import Navbar from './Navbar';

const Header = ({bit,name, contactEmail})=>{
    return(
        <div>
            <div className="header_container">
                <Link to="/"><img className='bit' src={bit}></img></Link>
              <Navbar /> 
            </div>
        </div>
    )
}

export default Header

