import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import {Profile} from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {StateType, StoreType} from './redux/State';


type PropsType = {
    appState: StateType
    store: StoreType
}


const App = (props: PropsType) => {
    const {appState,store} = props
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
                                                 dispatch={store.dispatch.bind(store)}
                               />}/>
                        <Route path={'/Dialogs'}
                               element={<Dialogs dialogsPage={appState.dialogsPage}
                                                 dispatch={store.dispatch.bind(store)}/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
