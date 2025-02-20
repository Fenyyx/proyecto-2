import React, { useState } from "react";
import axios from "axios";

function Tweet({ tweet, setTweets }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTweet, setEditTweet] = useState({
    content: tweet.content,
  });

  // Función para manejar los cambios en el formulario de edición
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTweet((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para guardar los cambios del tweet editado
  const handleSaveEdit = () => {
    axios
      .put(`http://localhost:5005/tweets/${tweet.id}`, editTweet)
      .then((response) => {
        setTweets((prev) =>
          prev.map((item) =>
            item.id === tweet.id ? response.data : item
          )
        );
        setIsEditing(false); // Sale del modo de edición
      })
      .catch((error) => console.error("Error updating tweet:", error));
  };

  // Función para eliminar el tweet
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
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
        alt="User Avatar"
      />
      <div className="tweet-content">
        <div className="tweet-header">
          <div className="user-info">
            <span className="username">Username</span>
            <span className="handle">@username</span>
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
        {/* Botón para eliminar el tweet */}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Tweet;
