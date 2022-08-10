import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Technologies from "./components/technologies/Technologies";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Technologies/>
    </div>
  );
}

export default App;
