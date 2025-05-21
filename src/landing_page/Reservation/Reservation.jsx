import React from 'react';
import Hero from './HeroSec';
import BodyHeader from '../BodyHeader';
// import "./Reservation.css"

function Reservation() {
    return ( <div style=    {{backgroundColor:"#f9f9f9"}}>
        
        <BodyHeader text="All Reservation" btntext="Create Reservations" link="/createreservation"/>
        <Hero/>
    </div> );
}

export default Reservation;