//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios'
//NECESSARY COMPONENTS
import Photo from '../Photo';
import Loading from '../Loading';
import apiKey from '../../api-key/config.js';

//APP
class NHL extends Component {
    state = {
    	photos: [],
    	loading: false
    }

	componentDidMount(){
	    this.nhlPage()
	};

    //RETRIEVING DATA FROM API LINK
    nhlPage = (tags = 'nhl-hockey') => {
	this.setState({loading: true}, () => {
		axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
		   .then(res => {
		   	   this.setState({
		   	   	   photos: res.data.photos.photo,
		   	   	   loading: false
		   	   });
		   })
		   .catch(error => console.log('Error fetching and parsing data', error));
	   })
	}

    render(){
    	return (
		 <div className="photo-container">
			<h2>Results</h2>
			         {this.state.loading ? 
			           <Loading /> :
			           <ul>
				           {this.state.photos.map(photo => 
						   <Photo
							url = {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` } 
					        key={photo.id} title={photo.title}/>
						   )}
			           </ul>
			       }
	    </div>
		)
    }
};

//EXPORT COMPONENT TO USE ACROSS APP
export default NHL