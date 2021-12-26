import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  // react-router-dom 6버전부턴 Switch => Routes/ component=> element
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>  
          <Route exact path="/" element={<LandingPage/>}/> 
          <Route exact path="/login" element={Auth(<LoginPage/>, false)}/>  /* 버전차이로 에러 */
          <Route exact path="/register" element={Auth(<RegisterPage/>, false)}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
