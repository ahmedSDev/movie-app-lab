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
  // Your code here
 }

 handleTextInput = (e) => {
  e.preventDefault();
  // Your code here
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
       // Your code here
      </div>
     )}
   </div>
  )
 }
}

export default Movie;