import React, { Component } from "react";
import "./App.css";
//================================================


// CONSTRUCTOR & SUPER ===========================
class Head extends Component {
  constructor() {
    super();
    this.state = {};
  }

// FUNCTIONS ====================================


// RENDER =======================================
  render() {

// RETURN ========================================
    return (
      <div className="header">
        <div className="wrapper">

          <div className="headerText">
            
            <h1>Curated Style</h1>
  
            <div className="intro">
              
              <p>
                Life's too short to use terrible photos. Let us curate a collection of stock images for your convenience. Select a category to suit the theme of your website or blog to get a collection of gorgeous photos.
              </p>

            </div>

          </div>

        </div>
        
      </div>
    );
  }
}


// EXPORT =====================================
export default Head;
