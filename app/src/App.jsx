import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";  // No es necesario importar BrowserRouter
import "./App.css";
import Sidebar from "./Componentes/Sidebar";
import ButtonColors from "./Componentes/PostButton";
import "./Componentes/Sidebar.css";
import MainContent from "./Componentes/MainContent";
import RightSidebar from "./Componentes/RightSideBar";
import axios from "axios";
import Home from "./Pages/Home";  // Asegúrate de que la ruta es correcta
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound"; // Importa el componente NotFound

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
          {/* Ruta para el home */}
          <Route path="/" element={<Home tweets={tweets} setTweets={setTweets} />} />
          {/* Ruta para el perfil */}
          <Route path="/profile/:handle" element={<Profile />} />
          {/* Ruta para el error 404 */}
          <Route path="*" element={<NotFound />} /> {/* Captura todas las rutas no encontradas */}
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




