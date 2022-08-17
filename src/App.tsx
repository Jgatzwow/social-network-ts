import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import {Profile} from "./components/Profile/Profile";


const App = () => {
    return (
        <div className='app__wrapper'>
            <Header/>
            <NavBar/>
            <div className='content'>
                <Profile/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
