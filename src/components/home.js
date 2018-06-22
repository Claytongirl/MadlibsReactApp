import React, { Component } from 'react';

import Header from './header';
import Card from './card';
//don't have to put header.js, it knows

class Home extends Component {
  render() {
    return (
      <div className = "home">
      {Header()}
      <Card />
      </div>
    );
  }
}

export default Home;