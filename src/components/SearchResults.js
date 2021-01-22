//DEPENDENCIES
import React from 'react';
//NECESSARY COMPONENTS
import Photo from './Photo';
import NotFound from './NotFound';
import {useHistory} from 'react-router-dom'

//APP
const SearchResults = (props) => {
const history = useHistory();
const results = props.data;
let searchPhoto;
if(results.length){
	history.push(props.query)
    searchPhoto = results.map(photo => <Photo url = {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} title={photo.title}/>);
} else {
	searchPhoto = <NotFound />
}
	return (
	<div>
	      <div className="photo-container">
			<h2>{results.length ? 'Results' : null}</h2>
		        {results.length ? <ul>{searchPhoto}</ul> : searchPhoto}
		  </div>
    </div>
  );
};

//EXPORT COMPONENT TO USE ACROSS APP
export default SearchResults;