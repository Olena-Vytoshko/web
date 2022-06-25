import React, { Component, Switch } from "react";
import { Route, Router } from 'react-router';

import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'



class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
