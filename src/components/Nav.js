//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios';
import {
 Route,
 NavLink,
} from 'react-router-dom';
import apiKey from '../api-key/config.js';

//SPORT DEFAULTS
import NBA from './sports/NBA';
import NHL from './sports/NHL';
import NFL from './sports/NFL';

//NAV 
class Nav extends Component {
state = {
	nba: [],
	nfl: [],
	nhl: []
}

//RETRIEVING DATA FROM API LINK
componentDidMount(){
    this.nbaPage();
    this.nflPage();
    this.nhlPage();
};

//NBA DATA 
nbaPage = (tags = 'nba-basketball') => {
	axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
	   .then(res => {
	   	   this.setState({
	   	   	   nba: res.data.photos.photo
	   	   });
	   })
	   .catch(error => console.log('Error fetching and parsing data', error));
};

//NFL DATA 
nflPage = (tags = 'nfl') => {
	axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
	   .then(res => {
	   	   this.setState({
	   	   	   nfl: res.data.photos.photo
	   	   });
	   })
	   .catch(error => console.log('Error fetching and parsing data', error));
};

//NHL DATA 
nhlPage = (tags = 'nhl') => {
	axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
	   .then(res => {
	   	   this.setState({
	   	   	   nhl: res.data.photos.photo
	   	   });
	   })
	   .catch(error => console.log('Error fetching and parsing data', error));
};
 
 //HTML RENDERING
 render() {
	return (
	  <nav className="main-nav">
        <ul>
          <li><NavLink to='/sports/NBA'>NBA</NavLink></li>
          <li><NavLink to='/sports/NFL'>NFL</NavLink></li>
          <li><NavLink to='/sports/NHL'>NHL</NavLink></li>
        </ul>
        <Route exact path = '/sports/NBA'>
           <NBA data = {this.state.nba}/>
        </Route>
        <Route exact path = '/sports/NFL'>
           <NFL data = {this.state.nfl} />
        </Route>
        <Route exact path = '/sports/NHL'>
           <NHL data = {this.state.nhl} />
        </Route>
      </nav>
	);
  }
};


//EXPORT COMPONENT TO USE ACROSS APP
export default Nav