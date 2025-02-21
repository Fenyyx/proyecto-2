// MainContent.jsx
import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultUser = {
  username: "Joseph Jostar",
  handle: "@BestJojo",
  avatar: "https://static.tvtropes.org/pmwiki/pub/images/41a8bb16_eecd_4de0_9f43_e8e08b7d4495.jpeg"
};

function MainContent({ tweets, setTweets }) {
  const navigate = useNavigate();
  const [newTweet, setNewTweet] = useState({
    content: "",
    ...defaultUser,
    timestamp: new Date().toISOString()
  });

  const handleChange = (e) => {
    setNewTweet(prev => ({ ...prev, content: e.target.value }));
  };

  const handleCreateTweet = (e) => {
    e.preventDefault();
    if (newTweet.content.trim()) {
      const tweetWithTimestamp = { ...newTweet, timestamp: new Date().toISOString() };
      axios.post("http://localhost:5005/tweets", tweetWithTimestamp)
        .then(response => {
          setTweets(prev => [...prev, response.data]);
          setNewTweet(prev => ({ ...prev, content: "" }));
        })
        .catch(error => console.error("Error creating tweet:", error));
    }
  };

  return (
    <div className="main-content">
      <div className="top-bar">
        <div className="search-bar">
          <input type="text" placeholder="Search Twitter" />
        </div>
      </div>

      <div className="create-tweet">
        <h3>Write a new tweet</h3>
        <form onSubmit={handleCreateTweet}>
          <textarea
            name="content"
            value={newTweet.content}
            onChange={handleChange}
            placeholder="What's happening?"
          />
          <button type="submit">Tweet</button>
        </form>
      </div>

      <div className="feed">
        {tweets.length === 0 ? (
          <p>No tweets available</p>
        ) : (
          tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet} setTweets={setTweets} navigate={navigate} />
          ))
        )}
      </div>
    </div>
  );
}

export default MainContent;
