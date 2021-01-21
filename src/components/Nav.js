//DEPENDENCIES
import React from 'react';
import {
 NavLink,
} from 'react-router-dom';

//NAV 
const Nav = () => {
 //HTML RENDERING
	return (
	  <nav className="main-nav">
        <ul>
          <li><NavLink to='/sports/NBA'>NBA</NavLink></li>
          <li><NavLink to='/sports/NFL'>NFL</NavLink></li>
          <li><NavLink to='/sports/NHL'>NHL</NavLink></li>
        </ul>
      </nav>
	);
};

//EXPORT COMPONENT TO USE ACROSS APP
export default Nav;