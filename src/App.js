import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Head from './Head.js';
import Search from './Search.js';
import Results from './Results';
import Footer from './Footer.js';
//================================================

/* PSEUDO CODE ===========================

1. GET USER SELECTION FROM FORM
2. CALL API
    A. ADD IN USER SELECTION TO USE IN CALL
    B. GET BACK PHOTOS 
    C. SAVE DATA IN STATE
3. PRINT THE PHOTOS TO THE PAGE

=========================================*/

// CONSTRUCTOR & SUPER ===========================
class App extends Component {

  constructor() {
    super();
    this.state = {
      allPhotos: [],
      apiKey: "787d03c5f6bcb1fd25de1eb439b440461a0859cbb19a541743b4af9a881af1ca"
    };
  }

// API CALL =====================================
  // componentDidMount() { - WANT API TO BE CALLED ON SUBMIT, NOT ONCE PAGE IS RENDERED

  getPhotos = () => { 
    axios({
      url: `https://api.unsplash.com/search/photos?`,
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: this.state.apiKey,
        queryParam: "value",
        page: 1,
        per_page: 20,
        query: this.getTheme
        //I think this is running the request right away based on "Select a Category" it's not waiting for the button click maybe because it's in componentdidmount
      }
      // NOT SURE IF THIS PART IS DONE RIGHT
    })
    .then(response => {
      // *** MIGHT HAVE TO REMOVE .RESULTS NOT SURE ABOUT THAT PART ***
      console.log(response.data);
      this.setState({
        allPhotos: response.data
      });
    });
  } 

// FUNCTIONS ====================================

// 1. NEED TO GET THE THEME SELECTED BY THE USER ON THE FORM

  getTheme = (e, themeChoice) => {
    e.preventDefault();
    console.log(themeChoice);
    // IT IS PULLING THE THEME CHOICE FROM THE FORM SO YAY
  }

// RENDER =======================================
  render() {


// RETURN ========================================
    return (
      <div className="App">

        <div className="flex">

          <Head />

          <div className="main flex">

            <Search getThemeProp={this.getTheme}/>

            <Results />

          </div>

        </div>

          <Footer />

      </div>
    )
  }
}
// EXPORT =====================================
export default App;

