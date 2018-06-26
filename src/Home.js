import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
 render() {
  return (
   <div>
    <div>Home Page</div>
    <ul>
     <li><Link to="/movie">Movie</Link></li>
    </ul>
   </div>
  )
 }
}

export default Home;