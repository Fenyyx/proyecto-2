import React from "react";
import Tweet from "./Tweet";
import axios from "axios";


function MainContent() {
  return (
    <div className="main-content">
      {/* Barra superior */}
      <div className="top-bar">
        <div className="search-bar">
          <input type="text" placeholder="Search Twitter" />
        </div>
      </div>

      {/* Feed de tweets */}
      <div className="feed">
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
}

export default MainContent;

