import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
 render() {
  clicked = () => {
   console.log('Clicked');
  }
  return (
   <div>
    <div>Home Page</div>
    <ul>
     <li><Link to="/movie">Movie</Link></li>
     <button onClick={this.clicked}></button>
    </ul>
   </div>
  )
 }
}

export default Home;