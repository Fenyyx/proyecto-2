import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";  // No es necesario importar BrowserRouter
import "./App.css";
import Sidebar from "./Componentes/Sidebar";
import ButtonColors from "./Componentes/PostButton";
import "./Componentes/Sidebar.css";
import MainContent from "./Componentes/MainContent";
import RightSidebar from "./Componentes/RightSideBar";
import Profile from "./Componentes/Profile"; // Asegúrate de tener este componente
import axios from "axios";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/tweets")
      .then(response => {
        setTweets(response.data);
      })
      .catch(error => console.error("Error fetching tweets:", error));
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
        <Routes>
          <Route path="/" element={<MainContent tweets={tweets} setTweets={setTweets} />} />
          <Route path="/profile/:handle" element={<Profile />} />
        </Routes>
        <div className="RightSidebar">
          <RightSidebar />
        </div>
      </div>
      <ButtonColors />
    </div>
  );
}

export default App;


