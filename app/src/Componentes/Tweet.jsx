import React from "react";
import axios from "axios";



function Tweet() {
  return (
    <div className="tweet">
      <img className="user-avatar" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="User Avatar" />
      <div className="tweet-content">
        <div className="tweet-header">
          <div className="user-info">
            <span className="username">Username</span>
            <span className="handle">@username</span>
          </div>
        </div>
        <div className="tweet-body">
          <p>This is a tweet!</p>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

