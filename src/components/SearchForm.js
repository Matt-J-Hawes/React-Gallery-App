//DEPENDENCIES
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

//SEARCHFORM
class SearchForm extends Component {
	//APPS STATE
	state = {
		searchText: '',
		redirect: false,
		query: ''
	};

    //FOCUS INPUT ON PAGE LOAD
	componentDidMount(){
		this.tags.focus()
	}

    //SET SEARCH TEXT TO EQUAL USER INPUT
	onSearchChange = e => {
		this.setState({
			searchText: e.target.value,
			query: e.target.value
		});
	};

    //COLLECT DATA BASED ON USER INPUT - STORE INPUT AS THE URL 'TAG'
	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.tags.value);
		e.currentTarget.reset()
	};

    //REDIRECT BACK TO HOME ON SEARCH
	setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  
  renderRedirect = () => {
    if (this.state.redirect && this.state.query !== ''){
	  this.setState({
      	redirect: false
      })
      return <Redirect to= {`/search/${this.state.query}`} />
    }; 
  };

  //HTML RENDERING
  render() {
  	return (
	    <form className="search-form" onSubmit={this.handleSubmit}>
        <input 
	        type="search" 
	        name="search" 
	        placeholder="Search..." 
	        onChange= {this.onSearchChange} 
	        ref={(input) => this.tags = input}
	        required/>
	         {this.renderRedirect()}
	        <button onClick= {this.setRedirect} type="submit" className="search-button">
	          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
	            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
	            <path d="M0 0h24v24H0z" fill="none"/>
	          </svg>
	        </button>
       </form>
	  );
   };
};

//EXPORT COMPONENT TO USE ACROSS APP
export default SearchForm
