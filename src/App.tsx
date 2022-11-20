import React from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "./components/navbar/SideBar/SideBar";
import { StateType } from "./redux/ReduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";

type PropsType = {
  appState: StateType;
};

const App = (props: PropsType) => {
  const { appState } = props;
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <HeaderContainer />
        <NavBar sideBar={appState.sidebar} />
        <div className="content">
          <Routes>
            <Route path={"/Profile"} element={<ProfileContainer />} />
            <Route path={"/Profile/:userId"} element={<ProfileContainer />} />
            <Route path={"/Users"} element={<UsersContainer />} />
            <Route path={"/Login"} element={<Login />} />
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
