import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SideBar } from "./components/navbar/SideBar/SideBar";
import { StateType, StoreType } from "./redux/ReduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropsType = {
  appState: StateType;
  store: StoreType;
};

const App = (props: PropsType) => {
  const { appState, store } = props;
  console.log(appState);
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavBar sideBar={appState.sideBar} />
        <div className="content">
          <Routes>
            <Route path={"/"} element={<Profile store={store} />} />
            <Route path={"/Profile"} element={<Profile store={store} />} />
            <Route
              path={"/Dialogs"}
              element={<DialogsContainer store={store} />}
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
