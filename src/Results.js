// import React, { Component } from "react";
// import "./App.css";
//==============================================

/* PSEUDO CODE =============================

// 1. GET THE PHOTO RESULTS
// 2. APPEND TO PAGE

========================================*/

//CONSTRUCTOR & SUPER ===========================
// class Results extends Component {

// RENDER =======================================
  // render() {

//RETURN ====================================
//     return (

//       <div className="Results">
//           <div className="wrapper">
//             <div className="gallerySection">
//               <h2 id="gallery">Gallery Results</h2>
//               <div className="galleryContainer">
//                 {this.state.allPhotos.map((photo, i) => {
//                   return (
//                     <div className="photos" key={i}>
//                       <img
//                         src={photo.urls.regular}
//                         alt={photo.alt_description}
//                       />
//                       <a
//                         href={photo.user.portfolio_url}
//                         target="_blank"
//                         title="Visit the photographers website"
//                         className="credit"
//                       >
//                         Photo by: {photo.user.first_name}{" "}
//                         {photo.user.last_name}
//                       </a>
//                       <a
//                         href={photo.links.download}
//                         target="_blank"
//                         title="Download this photo, large file size"
//                       >
//                         <i className="fas fa-save download downloadLarge"></i>
//                       </a>
//                       <a
//                         href={photo.urls.regular}
//                         target="_blank"
//                         title="Download this photo, medium file size"
//                       >
//                         <i className="fas fa-save download downloadRegular"></i>
//                       </a>

//                       <a
//                         href={photo.urls.small}
//                         target="_blank"
//                         title="Download this photo, small file size"
//                       >
//                         <i className="fas fa-save download downloadSmall"></i>
//                       </a>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//     );
//   }
// }

// // EXPORT ====================================
// export default Results;