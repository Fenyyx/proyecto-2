import React from 'react';
import MainContent from '../Componentes/MainContent';  // Usamos el componente MainContent que ya tienes

function Home({ tweets, setTweets }) {
  return (
    <div className="home">
      <MainContent tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default Home;

