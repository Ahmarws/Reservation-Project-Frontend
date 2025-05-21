import React from 'react';
import MonthCalender from './MonthCalendar';
import WeekCalendar from './WeekCalendar';
import ViewRes from './View';


function Calender() {
    return ( 
    <div>
        <MonthCalender/>
        <WeekCalendar/>
        <ViewRes/>
    </div> );
}

export default Calender;