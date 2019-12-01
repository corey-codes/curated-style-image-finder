import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Head from './Head.js';
import Search from './Search.js';
// import Results from './Results';
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
      getPhotos: [],
      // userSelection: '',
      apiKey: "787d03c5f6bcb1fd25de1eb439b440461a0859cbb19a541743b4af9a881af1ca"
    };
  }

  // API CALL =====================================
  componentDidMount() {
    //- IF I HAVE IT IN C.D.M IT IS DOING THE CALL RIGHT AWAY BEFORE SELECTION IS MADE....IT SEARCHES "SELECT A CATEGORY" UGH...

    //MAY NEED SOME SORT OF IF STATEMENT...IF USER SELECTION RECEIVED MAKE AXIOS CALL? if userSelect !== '' 

    // const pullPhotos = () => {

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
          //this is running the request right away based on "Select a Category" it's not waiting for the button click maybe because it's in componentdidmount
        }
      }).then(response => {
        console.log(response.data.results);
        this.setState({
          allPhotos: response.data.results
        });
      });
    // }
  }

  // FUNCTIONS ====================================

  // 1. NEED TO GET THE THEME SELECTED BY THE USER ON THE FORM
  // NOTE - I THINK THIS SHOULD ONLY BE CALLED ON SUBMIT...INFO SHOULD BE STORED IN GLOBAL STATE?

  getTheme = (e, themeChoice) => {
    e.preventDefault();
    console.log(themeChoice);
    // IT IS PULLING THE THEME CHOICE FROM THE FORM SO, YAY!

    const getPhotos = [...this.state.allPhotos];
    console.log(getPhotos, 'got some photos!');
  };

  // RENDER =======================================
  render() {
    // RETURN ========================================
    return (
      <div className="App">

        <div className="flex">

          <Head />

          <div className="main flex">

            <Search getThemeProp={this.getTheme} />

            <div className="Results">

              <div className="wrapper">

                <div className="gallerySection">

                  <h2>Gallery Results</h2>

                  {
                    // this.getPhotos.map((photo, index) => {
                    //   return (
                    //     <div className="photos" key={index}>
                    //       <img src={photo.id} alt={photo.id.title}/>
                    //     </div>
                    //   )
                    // })                    
                  }

                </div>

              </div>

            </div>

          </div>

        </div>

        <Footer />

      </div>
    );
  }
}
// EXPORT =====================================
export default App;

