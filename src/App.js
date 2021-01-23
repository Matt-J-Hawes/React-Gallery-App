//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

//NECESSARY COMPONENTS
import Title from './components/Title';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Error404 from './components/Error404';
import apiKey from './api-key/config.js';
import SearchResults from './components/SearchResults';
import Loading from './components/Loading';
import NBA from './components/sports/NBA';
import NHL from './components/sports/NHL';
import NFL from './components/sports/NFL';

//APP 
class App extends Component {
  state = {
  	photos: [],
  	loading: true,
  	query: ''
};

//RETRIEVING DATA FROM API LINK
componentDidMount(){
    this.performSearch()
};

//DEFAULT HOME PAGE AND DYNAMIC SEARCH
performSearch = (tags = 'black and white and red') => {
	this.setState({loading: true}, () => {
		axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
		   .then(res => {
		   	   this.setState({
		   	   	   photos: res.data.photos.photo,
		   	   	   loading: false,
		   	   	   query: tags
		   	   })
		})
		   .catch(error => console.log('Error fetching and parsing data', error));
	})
};

//HTML RENDERING
  render() {
  	return (
	  <div className="container">
	    <Title />
         <Router>
		   <SearchForm onSearch= {this.performSearch} data ={this.state.photos}/>
		   <Nav />
		       <Switch>
		           <Route exact path = '/'> 
			           {(this.state.loading) ? <Loading /> : <SearchResults data={this.state.photos}/> }
			       </Route>
	               <Route path = '/sports/NBA'>
			         <NBA />
			        </Route>
			        <Route path = '/sports/NFL'>
					 <NFL /> 
			        </Route>
			        <Route path = '/sports/NHL'>
					 <NHL />
			        </Route>
			       <Route path = '/search/:query'> 
			           {(this.state.loading) ? <Loading /> : <SearchResults query={this.state.query} onLoad={this.performSearch} data={this.state.photos}/> }
			       </Route>
			       <Route> 
			           <Error404 />
		           </Route>
		       </Switch>
       </Router>
    </div>
    );
  };
};

//EXPORT COMPONENT TO USE ACROSS APP
export default App;
