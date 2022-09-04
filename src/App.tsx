import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import {Profile} from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {onAddPost, StateType} from './redux/State';

type PropsType = {
    appState: StateType
}


const App = (props: PropsType) => {
    const {appState} = props
    console.log()
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <NavBar sideBar={appState.sideBar}/>
                <div className="content">
                    <Routes>
                        <Route path={'/Profile'}
                               element={<Profile initialPostsState={appState.profilePage.initialPostsState}
                                                 postMessage={appState.profilePage.postMessage}
                               onAddPost={onAddPost}/>}/>
                        <Route path={'/Dialogs'}
                               element={<Dialogs dialogsPage={appState.dialogsPage}/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
