import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Head from './Head.js';
import Search from './Search.js';
import Footer from './Footer.js';
//================================================



// CONSTRUCTOR & SUPER ===========================
class App extends Component {
  constructor() {
    super();
    this.state = {
      allPhotos: [],
    };
  }
// FUNCTIONS ====================================


// RENDER =======================================
  render() {


// RETURN ========================================
    return <div className="App">

      <div className="flex">

        <Head />

        <div className="main flex">

          <Search />

        </div>
      
      </div>

        <Footer />

    </div>;
  }
}
// EXPORT =====================================
export default App;

