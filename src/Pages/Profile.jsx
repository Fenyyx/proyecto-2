import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'


function Profile() {
  const { handle } = useParams();  // Obtenemos el handle de la URL
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5005/tweets?handle=${handle}`)
      .then((response) => {
        if (response.data.length > 0) {
          setUser({
            username: response.data[0].username,
            handle: response.data[0].handle,
            avatar: response.data[0].avatar,
          });
          setTweets(response.data);
        } else {
          setError("No user found");
        }
      })
      .catch((err) => {
        setError("Error fetching user data");
        console.error(err);
      });
  }, [handle]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile">
      <img src={user.avatar} alt="Avatar" />
      <h2>{user.username}</h2>
      <p>{user.handle}</p>
      <h3>Tweets</h3>
      {tweets.length > 0 ? (
        tweets.map((tweet) => (
          <p key={tweet.id}>{tweet.content}</p>
        ))
      ) : (
        <p>No tweets available.</p>
      )}
    </div>
  );
}

export default Profile;



