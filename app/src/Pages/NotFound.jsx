import React, { useState } from 'react';

const NotFound = () => {
  const [soundPlayed, setSoundPlayed] = useState(false);

  // Función para reproducir el sonido
  const playSound = () => {
    if (!soundPlayed) {
      const audio = new Audio('/sound404.mp3');  // Ruta del sonido en la carpeta public
      audio.play();
      setSoundPlayed(true);  // Marcar que ya se ha reproducido el sonido
    }
  };

  // Usamos useEffect para reproducir el sonido cuando haya interacción del usuario
  const handleClick = () => {
    playSound();  // Reproducir sonido al hacer clic
  };

  return (
    <div className="not-found-container" onClick={handleClick}> {/* Escuchar clic */}
      {/* Video en bucle */}
      <video 
        src="/404video.mp4"  // Ruta del video en la carpeta public
        alt="Page Not Found" 
        className="not-found-video"
        loop
        autoPlay
        muted  // Para que no se escuche el sonido del video (porque ya estamos usando nuestro propio audio)
      />
      <h1>404 - Página no encontrada</h1>
      <p>Haz clic aquí para activar el sonido</p>
    </div>
  );
};

export default NotFound;
