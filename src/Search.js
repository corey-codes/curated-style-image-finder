import React, { Component } from "react";
import "./App.css";
//==============================================

/* PSEUDO CODE =============================

1. COMPONENT TO LET THE USER SELECT A THEME 
    A. USER SELECTS A THEME FROM A SELECT DROP DOWN
    B. WHATEVER THE USER CLICKS ON WE WILL SAVE THAT SELECTION IN STATE
    C. ON SUBMIT, WE WILL TAKE USER SELECTION AND PASS IT UP TO APP.JS THROUGH A FUNCTION THAT WAS PASSED DOWN IN PROPS

WHAT WE NEED TO BUILD: 
-  NEED TO CREATE A FORM
-  SET STATE
-  FUNCTION FROM PROPS

========================================*/


// CONSTRUCTOR & SUPER ===========================
class Search extends Component {
  constructor() {
    super();
    this.state = {
      userSelection: ''
    };
  }

// FUNCTIONS ====================================
handleInputChange = (e) => {
  console.log(e.target.value);
  this.setState({
    userSelection: e.target.value
  // }, () => { - do i need a second callback function to make sure state is set before moving on?
  });
};


// RENDER =======================================
  render() {
    // THIS FUNCTION IS TECHINCALLY NEVER CALLED, THAT'S OK
    const deferredFunction = (e) => this.props.getUserThemeSelectionProp(e, this.state.userSelection);

// RETURN ========================================
    return (

      <div className="Search">

        <div className="wrapper">

{/* SEARCH SECTION =============*/}
          <div className="searchSection">

            <h2>Search</h2>

            <div className="formArea">

              <form action="" className="themeForm">

                <label htmlFor="theme" className="visually-hidden"></label>
                <select onChange={this.handleInputChange} name="theme" className="themeSelect" id="themeSelect" ref={select => this.theme}>

                  <option defaultValue="default" value="Choose One">Select a category</option>
                  <option value="Travel">Travel</option>
                  <option value="Home Decor">Home Decor</option>
                  <option value="Flat-lay">Flat-lay</option>
                  <option value="Food and Drink">Food and Drink</option>
                  <option value="Pets">Pets</option>
                  <option value="Wallpaper">Wallpaper</option>

                </select>

                <button type="submit" className="submitBtn" onClick={ (e) =>
                    this.props.getThemeProp(e, this.state.userSelection)}>
                      Get My Photos
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    )
  }
}



// EXPORT =====================================
export default Search;
