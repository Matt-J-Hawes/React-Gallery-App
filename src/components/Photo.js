//NECESSARY COMPONENTS
import React from 'react';

//PHOTO
const Photo = (props) => {
  return (      
	    <li>
	      <img src={props.url} alt={props.title} />
	    </li>
  );
};

//EXPORT COMPONENT TO USE ACROSS APP
export default Photo