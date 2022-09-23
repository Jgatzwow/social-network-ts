import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { Profile } from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { StateType, StoreType } from "./redux/store";
import { SideBar } from "./components/navbar/SideBar/SideBar";

type PropsType = {
  appState: StateType;
  store: StoreType;
};

const App = (props: PropsType) => {
  const { appState, store } = props;

  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavBar sideBar={appState.sideBar} />
        <div className="content">
          <Routes>
            <Route
              path={"/"}
              element={
                <Profile
                  initialPostsState={appState.profilePage.initialPostsState}
                  postMessage={appState.profilePage.postMessage}
                  dispatch={store.dispatch.bind(store)}
                />
              }
            />
            <Route
              path={"/Profile"}
              element={
                <Profile
                  initialPostsState={appState.profilePage.initialPostsState}
                  postMessage={appState.profilePage.postMessage}
                  dispatch={store.dispatch.bind(store)}
                />
              }
            />
            <Route
              path={"/Dialogs"}
              element={
                <Dialogs
                  dialogsPage={appState.dialogsPage}
                  dispatch={store.dispatch.bind(store)}
                />
              }
            >
              {/*<Route path={'*'} element={<h1>Michael Page Not Found</h1>}/>*/}
              <Route
                path={":id"}
                element={<SideBar friendsData={appState.sideBar} />}
              />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
