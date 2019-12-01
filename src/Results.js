import React, { Component } from "react";
import "./App.css";
//==============================================

/* PSEUDO CODE =============================

1. GET THE PHOTO RESULTS
2. APPEND TO PAGE

========================================*/

// CONSTRUCTOR & SUPER ===========================
class Results extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  // FUNCTIONS ====================================
 

  // RENDER =======================================
  render() {
    

// RETURN ====================================
        return (

            <div className="Results">

                <div className="wrapper">

                    <div className="gallerySection">
                        
                        <h2>Gallery Results</h2>

                        <div className="gallery">
                            

                        {/* APPEND PHOTOS HERE */}

                        </div>
                        
                    </div>

                </div>

            </div>

        )
    }
}

// EXPORT =====================================
export default Results;
