import React from 'react'
import './App.css'
import Sidebar from './Componentes/Sidebar'
import ButtonColors from './Componentes/PostButton'
import './Componentes/Sidebar.css'
import MainContent from "./Componentes/MainContent";
import RightSidebar from "./Componentes/RightSideBar";
import axios from "axios";



function App() {


  return (
    <>
     <div className="App">
    
     <Sidebar/>
     
     <div className="Content">
    <MainContent/>
    <div className="RightSidebar">
    <RightSidebar />
    </div>
    
    </div>
    </div>
      </>
      
  )
}

export default App
