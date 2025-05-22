import React, { useState } from "react";
import logo from "../assets/comLogo.png";
import "./Signin.css";
import { useAuth } from "../authContext";

const Signin = () => {
  

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState("false");
  const { setCurrentUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const requestBody = {
      query: `
      query {
        login(email: "${email}", password: "${password}") {
          userId
          token
          tokenExpiration
        }
      }
      `,
    };

    try {
      // setLoading(true);
      const response = await fetch("http://localhost:3000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response) {
        throw new Error("No response from server");
      }
      console.log("Fetch response:", response);
      
      const resData = await response.json();
      if (resData.data && resData.data.login) {
        localStorage.setItem("token", resData.data.login.token);
        localStorage.setItem("userId", resData.data.login.userId);
        setCurrentUser(resData.data.login.userId);
       
       window.location.href = "/";
      } else {
        // handle login error
        console.error("Login failed", resData.errors);
      }
      // setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Login Failed!");
      // setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="imgdiv">
        <img src={logo} alt="Logo" />
      </div>
      <div className="p-3" id="herodiv">
        <form className="form-signin border border-primary rounded">
          <h1>Login</h1> <br />
          <p>Please enter your email and password!</p> <br />
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                name="Email"
                className="form-control"
                id="inputEmail3"
                data-has-listeners="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>{" "}
          <br />
          <div className="row mb-3">
            <label
              htmlFor="inputPassword3"
              id="div3"
              className="col-sm-2 col-form-label"
            >
              Password
            </label>
            <div className="col-sm-10" style={{ position: "relative" }}>
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: 35, width: "100%" }}
                className="form-control"
                data-has-listeners="true"
                id="inputPassword3"
              />
              <i
                onClick={togglePasswordVisibility}
                className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
                style={{
                  position: "absolute",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-40%)",
                  cursor: "pointer",
                  userSelect: "none",
                  color: "#333",
                  fontSize: "18px",
                }}
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    togglePasswordVisibility();
                  }
                }}
              ></i>
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#003454" }}
            onClick={handleLogin}
            // disabled={loading}
          >
            {/* {loading ? "..." : "Login"} */}
            Sign in
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Signin;
