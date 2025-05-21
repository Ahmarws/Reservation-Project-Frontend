// import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './landing_page/Home/Dashboard'
import Reservation from './landing_page/Reservation/Reservation'
import Calendar from './landing_page/CalendarPage/Calendar'
import User from './landing_page/Users/User'
import CreateUser from './landing_page/Users/CreateUser'
import GroupSport from './landing_page/Groups & Sports/GroupSport'
import NavBar from './landing_page/NavBar'
import CreateRes from './landing_page/Reservation/CreateReservation'
import Field from './landing_page/Field/Field'
import CreateField from './landing_page/Field/CreateField'
import CreateGroup from './landing_page/Groups & Sports/Group/CreateGroup'
import CreateSport from './landing_page/Groups & Sports/Sport/CreateSport'


function App() {
 

  return (
    
    <> 
    <NavBar/>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/user" element={<User />} />
      <Route path="/field" element={<Field/>} />
      <Route path="/groups&sports" element={<GroupSport />} />
      <Route path="/createreservation" element={<CreateRes/>} />
      <Route path="/creategroup" element={<CreateGroup/>} />
      <Route path="/createsport" element={<CreateSport/>} />
      <Route path="/createuser" element={<CreateUser/>} />
      <Route path="/createfield" element={<CreateField/>} />
    </Routes>
    </>
  )
}

export default App
