//NECESSARY COMPONENTS
import React from 'react';

//NOT FOUND
const NotFound = () => {
	return (
		<ul>
		 <li className="not-found">
            <h3>No Results Found...</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
	);
};

//EXPORT COMPONENT TO USE ACROSS APP
export default NotFound;