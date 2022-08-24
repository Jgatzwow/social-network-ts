import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import {Profile} from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <NavBar/>
                <div className="content">
                    <Route path={'/Profile'} component ={Profile}/>
                    <Route path={'/Dialogs'} component ={Dialogs}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
