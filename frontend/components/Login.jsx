import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

const Login = (props) => {
  const [loginData, setLoginData] = useState();
  const [isLogged, setIsLogged] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://server-ip:PORT/users/login",
      loginData
    );
    if (response.data) {
      localStorage.setItem("auth-token", response.data.token);
      props.check();
    }
  };

  const loginRender = () => {
    if (isLogged) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="container">
          <form onSubmit={submit} className="w-50 mx-auto">
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              style={{ marginTop: "20px" }}
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
  };

  return <div>{loginRender()}</div>;
};

export default Login;
