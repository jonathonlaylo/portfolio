import React from 'react';
import goldengate from '../assets/goldengate.jpg';

class Body extends React.Component{
  render(){
    return(
      <p className="App-intro">
        <img src={goldengate} className="goldengate" alt="logo" />
      </p>
    );
  }
}

export default Body;