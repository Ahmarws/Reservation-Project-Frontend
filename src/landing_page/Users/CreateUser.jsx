import React, { useState } from "react";
import "../../signin/Signin.css";

function CreateUser() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [role, setRole] = useState(null);

  // const [loading, setLoading] = useState("false");

  const handleLogin = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const requestBody = {
      query: `
         mutation {
        createUser(userInput:{name:"${name}", email:"${email}", password:"${password}", role:"${role}"}) {
          id
            name
          }
          }

         `,
    };
    try {
      await fetch("http://localhost:3000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? "Bearer " + token : "",
        },
      });
      alert("User created successfully");
      window.location.href = "/user";
    } catch (err) {
      console.error(err);
      alert("User Creation Failed");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="p-3" id="herodiv">
      <form className="form-signin border border-primary rounded">
        <h2>Create User</h2>
        <p>Please enter your credetials!</p>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputName"
              data-has-listeners="true"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
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
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
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
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: 35, width: "100%" }}
              className="form-control"
              data-has-listeners="true"
              id="inputPassword3"
              autoComplete="off"
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
        <div className="row mb-3">
          <label htmlFor="role" className="col-sm-2 col-form-label">
            Role
          </label>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="roleUser"
                value="user"
                checked={role === "user"}
                onChange={() => setRole("user")}
              />
              <label className="form-check-label" htmlFor="roleUser">
                User
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="roleAdmin"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
              />
              <label className="form-check-label" htmlFor="roleAdmin">
                Admin
              </label>
            </div>
          </div>
        </div>
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
  );
}

export default CreateUser;
