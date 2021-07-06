import React, { useEffect, useState } from "react";
import "./styles/index.css";
import Derivate from "./components/Derivate";
import Fletushka from "./components/Fletushka";
import FbTregu from "./components/FbTregu";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [logedin, setLogedIn] = useState(false);

  const checkLogin = async () => {
    const token = localStorage.getItem("auth-token");
    if (token !== null) {
      const response = await axios.post(
        "http://161.97.81.17:8898/users/tokenIsValid",
        null,
        {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        }
      );
      if (response.data) {
        setLogedIn(response.data);
      }
    }
  };

  const render = () => {
    if (logedin) {
      return (
        <Router>
          <Route path="/" exact>
            <div className="container">
              <div className="row">
                <div className="col text-center items">
                  <Link to="/derivate">
                    <div>Derivate</div>
                  </Link>
                </div>
                <div className="col text-center items">
                  <Link to="/fletushka">Cmimet e fletushkes</Link>
                </div>
                <div className="col text-center items">
                  <Link to="/fbtregu">FB Tregu</Link>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/derivate" component={Derivate} exact />
          <Route path="/fletushka" component={Fletushka} />
          <Route path="/fbtregu" component={FbTregu} />
          <Route path="/login">
            <Login check={checkLogin} />
          </Route>
        </Router>
      );
    } else {
      return <Login check={checkLogin} />;
    }
  };

  useEffect(checkLogin, []);
  return <div>{render()}</div>;
};

export default App;
