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
      apiKey: "787d03c5f6bcb1fd25de1eb439b440461a0859cbb19a541743b4af9a881af1ca",
      // pullPhotos: [],
      // getPhotos: [],
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
      }); //console.log(allPhotos);
    });
  };

// FUNCTIONS ====================================

// 1. NEED TO GET THE THEME SELECTED BY THE USER ON THE FORM

  // getTheme = (e, themeChoice) => {
  //   e.preventDefault();
  //   // console.log(themeChoice);

  //   const getPhotos = [...this.state.allPhotos];
  //   // console.log(getPhotos, "got some photos when I hit submit!");
  // };

// RENDER =======================================
  render() {
// RETURN ========================================
    return (
      <div className="App">
        <div className="flex">
          <Head />

          <div className="main flex">
            <Search handleSearch={this.handleSearch} />

            {/* <Results allPhotos={this.response.data.results} /> */}
{/* RESULTS */}
            <div className="Results">
              <div className="wrapper">
                <div className="gallerySection">
                  <h2 id="gallery">Gallery Results</h2>
                  <div className="galleryContainer">
                    {this.state.allPhotos.map((photo, i) => {
                      return (
                        <div className="photos" key={i}>
                          <img
                            // src={photo.links.download}
                            src={photo.urls.regular}
                            alt={photo.alt_description}
                          />
                          <a
                            href={photo.user.portfolio_url}
                            target="_blank"
                            title="Visit the photographers website"
                            className="credit"
                          >
                            Photo by: {photo.user.first_name}{" "}
                            {photo.user.last_name}
                          </a>
                          <a
                            href={photo.links.download}
                            target="_blank"
                            title="Download this photo, large file size"
                          >
                            <i className="fas fa-save download downloadLarge"></i>
                          </a>
                          <a
                            href={photo.urls.regular}
                            target="_blank"
                            title="Download this photo, medium file size"
                          >
                            <i className="fas fa-save download downloadRegular"></i>
                          </a>

                          <a
                            href={photo.urls.small}
                            target="_blank"
                            title="Download this photo, small file size"
                          >
                            <i className="fas fa-save download downloadSmall"></i>
                          </a>
                        </div>
                      );
                    })}
                  </div>
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

/* REMAINING:

. APPEND PHOTOS TO PAGE
4. ALT TAG DESCRIPTION
2. ADD PHOTOGRAPHERS NAME
3. LINK BACK TO PHOTOGRAPHERS UNSPLASH PROFILE
3. CREDIT UNSPLASH
5. DOWNLOAD LINK
6. ERROR MESSAGE IF USER SUBMITS WITHOUT CHOOSING CATEGORY

*/