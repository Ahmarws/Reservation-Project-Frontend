import React, { useEffect } from "react";
import "./App.css";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import Dashboard from "./landing_page/Home/Dashboard";
import Reservation from "./landing_page/Reservation/Reservation";
import Calendar from "./landing_page/CalendarPage/Calendar";
import User from "./landing_page/Users/User";
import CreateUser from "./landing_page/Users/CreateUser";
import GroupSport from "./landing_page/Groups & Sports/GroupSport";
import NavBar from "./landing_page/NavBar";
import CreateRes from "./landing_page/Reservation/CreateReservation";
import Field from "./landing_page/Field/Field";
import CreateField from "./landing_page/Field/CreateField";
import CreateGroup from "./landing_page/Groups & Sports/Group/CreateGroup";
import CreateSport from "./landing_page/Groups & Sports/Sport/CreateSport";
import Signin from "./signin/Signin";
import { useAuth } from "./authContext";

function App() {
  const location = useLocation();
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem("userId");
    if (userIdFromStorage && !currentUser) {
      setCurrentUser(userIdFromStorage);
    }
    if (!userIdFromStorage && !"/signin".includes(window.location.pathname)) {
      navigate("/signin");
    }
    if (userIdFromStorage && window.location.pathname=="/signin"){
      navigate("/");
    }
  },[currentUser,navigate,setCurrentUser]);

  return (
    <>
      {location.pathname !== "/signin" && <NavBar />}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/user" element={<User />} />
        <Route path="/field" element={<Field />} />
        <Route path="/groups&sports" element={<GroupSport />} />
        <Route path="/createreservation" element={<CreateRes />} />
        <Route path="/creategroup" element={<CreateGroup />} />
        <Route path="/createsport" element={<CreateSport />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/createfield" element={<CreateField />} />
      </Routes>
    </>
  );
}

export default App;
