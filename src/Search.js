import React, { Component } from "react";
import axios from "axios";
import "./App.css";
//===============================================

// API KEY ======================================
// const apiKey =
//   "787d03c5f6bcb1fd25de1eb439b440461a0859cbb19a541743b4af9a881af1ca";

// CONSTRUCTOR & SUPER ===========================
class Search extends Component {
  constructor() {
    super();
    this.state = {
      userSelection: '',
      apiKey: "787d03c5f6bcb1fd25de1eb439b440461a0859cbb19a541743b4af9a881af1ca"
    };
  }

  // FUNCTIONS ====================================

  // API CALL =====================================
  componentDidMount() {
    axios({
      url: "https://api.unsplash.com/search/photos?",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: this.state.apiKey,
        queryParam: "value",
        page: 1,
        per_page: 50,
        query: "dog"
        //TO BE ADDED BASED ON USER SELECTION DROP DOWN MENU
      }
      // NOT SURE IF THIS PART IS DONE RIGHT
    })
    .then(function(response => {
      this.setState({

      })
      .then 
    }); 
  }


// RENDER =======================================
  render() {

// RETURN ========================================
    return (
      <div className="search">
        <div className="wrapper">
          {/* SEARCH SECTION =============*/}

          <div className="searchSection">
            <h2>Search</h2>

            <div className="formArea">

              <form action="" className="themeForm">

                <select onChange={this.userSelectedTheme} name="themes" className="themeSelect" id="themeSelect">

                  <option value="chooseOne">Select a category</option>
                  <option value="travel">Travel</option>
                  <option value="homeDecor">Home Decor</option>
                  <option value="flatLay">Flatlay</option>
                  <option value="foodAndDrink">Food & Drink</option>
                  <option value="pets">Pets</option>
                  <option value="wallpaper">Wallpaper</option>

                </select>

                <button type="submit" className="submitBtn">Get My Photos</button>

              </form>

            </div>

          </div>

{/* GALLERY SECTION =============*/}

          <div className="gallerySection">

            <h2>Gallery Results</h2>
  
            <div className="results">
  
            </div>

          </div>

        </div>

      </div>
    );
  }
}

// EXPORT =====================================
export default Search;
