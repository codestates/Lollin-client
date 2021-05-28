import "./App.css";

import React, { useState } from "react";

import { Route, useHistory } from "react-router-dom";
import MainPage from "./pages/Main/Main.jsx";
import ItemsDB from "./pages/ItemsDB/ItemsDB.jsx";
import ChampDB from "./pages/ChampDB/ChampDB.jsx";
import ChampDetail from "./pages/ChampDetail/ChampDetail.jsx";

import Modal from "./component/Modal/Modal.jsx";
import Navbar from "./component/Navbar/NavbarFixed";
import FooterFixed from "./component/Footer/FooterFixed";
import SidebarDropdown from "./component/Sidebar/SidebarDropdown";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import Myinfo from "./pages/User/MyInfo";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [champPriId, setChampPriId] = useState(0);
  const history = useHistory();
  const [loginModalOn, setLoginModalOn] = useState(false);
  const [signUpModalOn, setSignUpModalOn] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChampPriId = (id) => {
    setChampPriId(id);
    history.push("/champions/detail");
  };

  console.log(champPriId);
  console.log(loginModalOn);

  return (
    <div className="Container">
      <Navbar toggle={toggle} loginModalOn={loginModalOn} setLoginModalOn={setLoginModalOn} signUpModalOn={signUpModalOn} setSignUpModalOn={setSignUpModalOn} />
      {/* {loginModalOn ? (<LoginModal show={loginModalOn} onHide={() => setLoginModalOn(false)} />)
        : ""}
      {signUpModalOn ? (<SignupModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)} />) : ""} */}
      <SidebarDropdown isOpen={isOpen} toggle={toggle} loginModalOn={loginModalOn} setLoginModalOn={setLoginModalOn} signUpModalOn={signUpModalOn} setSignUpModalOn={setSignUpModalOn} />
      <Route exact path="/" component={MainPage} />
      <Route
        exact
        path="/champions/all"
        render={() => <ChampDB handleChampPriId={handleChampPriId} />}
      />
      <Route
        exact
        path="/champions/detail"
        // component={ChampDetail}
        // champPriId={champPriId}
        render={() => <ChampDetail champPriId={champPriId} />}
      />
      <Route exact path="/items/all" component={ItemsDB} />
      <Route exact path="/user/login" component={Login} />
      <Route exact path="/user/signup" component={Signup} />
      <Route exact path="/user/update" component={Myinfo} />
      <FooterFixed />
    </div>
  );
}

export default App;
