//DEPENDENCIES
import React from 'react';
//NECESSARY COMPONENTS
import Photo from '../Photo'

//APP
const NFL = (props) => {
const results = props.data
const nflPhoto = results.map(photo => 
	<Photo url = {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` } 
	       key={photo.id} title={photo.title}/>
);
	return (
    <div className="photo-container">
		<h2>Results</h2>
	        <ul>
	          {nflPhoto}
	        </ul>
    </div>
  );
};

//EXPORT COMPONENT TO USE ACROSS APP
export default NFL