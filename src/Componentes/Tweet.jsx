// Tweet.jsx
import React, { useState } from "react";
import axios from "axios";

function Tweet({ tweet, setTweets }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTweet, setEditTweet] = useState({
    content: tweet.content,
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTweet((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    axios
      .put(`http://localhost:5005/tweets/${tweet.id}`, editTweet)
      .then((response) => {
        setTweets((prev) =>
          prev.map((item) =>
            item.id === tweet.id ? response.data : item
          )
        );
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating tweet:", error));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5005/tweets/${tweet.id}`)
      .then(() => {
        setTweets((prev) => prev.filter((item) => item.id !== tweet.id));
      })
      .catch((error) => console.error("Error deleting tweet:", error));
  };

  return (
    <div className="tweet">
      <img
        className="user-avatar"
        src={tweet.avatar || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"}
        alt="User Avatar"
      />
      <div className="tweet-content">
        <div className="tweet-header">
          <div className="user-info">
            <span className="username">{tweet.username}</span>
            <span className="handle">{tweet.handle}</span>
          </div>
        </div>
        <div className="tweet-body">
          {isEditing ? (
            <>
              <textarea
                name="content"
                value={editTweet.content}
                onChange={handleEditChange}
              />
              <button onClick={handleSaveEdit}>Save</button>
            </>
          ) : (
            <>
              <p>{tweet.content}</p>
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          )}
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Tweet;
