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
                Life's too short to use terrible photos.  Just because you're not a designer doesn't mean your website should pay the price.  Let us curate a collection of gorgeous stock images for you that will best suit the theme of your website or blog.  Simply select the theme and let us work our magic.
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
