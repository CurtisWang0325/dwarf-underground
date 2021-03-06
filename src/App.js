import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
