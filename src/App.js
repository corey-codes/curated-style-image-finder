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
      pullPhotos: [],
      allPhotos: [],
      getPhotos: [],
      apiKey: "787d03c5f6bcb1fd25de1eb439b440461a0859cbb19a541743b4af9a881af1ca",
    };
  }

  handleSearch = (event, searchValue) => {
    event.preventDefault();
    axios({
      url: `https://api.unsplash.com/search/photos?`,
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: this.state.apiKey,
        queryParam: "value",
        page: 1,
        per_page: 20,
        query: searchValue
      }
    }).then(response => {
      console.log(response.data.results);
      const allPhotos = response.data.results;
      this.setState({
        allPhotos
      });
    });
  };

  // FUNCTIONS ====================================

  // 1. NEED TO GET THE THEME SELECTED BY THE USER ON THE FORM
  // NOTE - I THINK THIS SHOULD ONLY BE CALLED ON SUBMIT...INFO SHOULD BE STORED IN GLOBAL STATE?

  getTheme = (e, themeChoice) => {
    e.preventDefault();
    console.log(themeChoice);
    // IT IS PULLING THE THEME CHOICE FROM THE FORM SO, YAY!

    const getPhotos = [...this.state.allPhotos];
    console.log(getPhotos, "got some photos when I hit submit!");
  };

  // RENDER =======================================
  render() {
    // RETURN ========================================
    return (
      <div className="App">
        <div className="flex">
          <Head />

          <div className="main flex">
            <Search 
              handleSearch={this.handleSearch}
              // getThemeProp={this.getTheme} 
            />

            <div className="Results">
              <div className="wrapper">
                <div className="gallerySection">
                  <h2>Gallery Results</h2>

                  {
                    // allPhotos.map((photo, index) => {
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

