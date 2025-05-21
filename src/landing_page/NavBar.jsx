import React from "react";
import "./NavBar.css";
import logo from "../assets/comLogo.png";
import { Link } from "react-router-dom";
import { Avatar, Box, Typography } from '@mui/material';

const UserProfile = ({ username = 'SLY', role = 'Admin' }) => {
  const initials = username
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <Box display="flex" alignItems="center" gap={1.5}>
      <Box textAlign="right">
        <Typography color=" #466b82" fontWeight="bold"  fontSize="0.9rem">
          {username}
        </Typography>
      
        <Typography color=" #466b82" fontSize="0.8rem">
          {role}
        </Typography>
      </Box>
      <Box>
        <Avatar sx={{ bgcolor: "#FFE0B2", color:" #466b82", width: 40, height: 40, fontWeight: 600 }}>
          {initials}
        </Avatar>
      </Box>
    </Box>
  );
};

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
     style={ {backgroundColor:"rgb(255, 255, 255)"}}
      
    >
      <div id="div1" className="container-fluid ">
        <div className="container" style={{ width: "25%" }}>
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid"
              src={logo}
              alt="Logo"
              style={{ width: "70%" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <Link  className="nav-link "  to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link "  to="/reservation">
                Reservation
              </Link>
            </li>
            <li className="nav-item">
              <Link   className="nav-link" to="/calendar">
                Calendar
              </Link>
            </li>

            <li className="nav-item">
              <Link  className="nav-link" to="/user">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/field">
                Field
              </Link>
             </li> 
            <li className="nav-item">
              <Link  className="nav-link" to="/groups&sports">
                Groups & Sports
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <UserProfile />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
