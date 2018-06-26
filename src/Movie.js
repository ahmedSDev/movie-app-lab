import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Movie extends Component {
 constructor(props) {
  super(props);
  this.state = {
   title: '',
   data: ''
  }
 }

 handleClick = (e) => {
  e.preventDefault();
  let self = this;
  axios.get(`http://www.omdbapi.com/?t=${this.state.title}&apikey=c78611b9`)
   .then(function (response) {
    self.setState({
     data: response.data
    })
   })
   .catch(function (error) {
    console.log(error);
   });
 }

 handleTextInput = (e) => {
  e.preventDefault();
  this.setState({
   title: e.target.value
  })
 }

 render() {
  return (
   <div>
    <div>Movie Page</div>
    <ul>
     <li><Link to="/">Home</Link></li>
    </ul>
    <div>
     <input
      value={this.state.title}
      type="text"
      placeholder="Search for a movie"
      onChange={this.handleTextInput} />
     <button onClick={this.handleClick} >Search</button>
    </div>
    {
     this.state.data && (
      <div>
       <h3>Name: {this.state.data.Title}</h3>
       <p>Year: {this.state.data.Year}</p>
       <p>Genre:{this.state.data.Genre}</p>
       <p>Director:{this.state.data.Director}</p>
      </div>
     )}
   </div>
  )
 }
}

export default Movie;