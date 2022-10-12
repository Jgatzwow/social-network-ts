import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SideBar } from "./components/navbar/SideBar/SideBar";
import { ProviderStoreType, StateType } from "./redux/ReduxStore";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

type PropsType = {
  appState: StateType;
};

const App = (props: PropsType) => {
  const { appState } = props;
  console.log(appState);
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavBar sideBar={appState.sidebar} />
        <div className="content">
          <Routes>
            <Route path={"/"} element={<Profile />} />
            <Route path={"/Profile"} element={<Profile />} />
            <Route path={"/Dialogs"} element={<DialogsContainer />}>
              {/*<Route path={'*'} element={<h1>Michael Page Not Found</h1>}/>*/}
              <Route
                path={":id"}
                element={<SideBar friendsData={appState.sidebar} />}
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
