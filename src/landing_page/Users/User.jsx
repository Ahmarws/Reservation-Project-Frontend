import React from 'react';
import ViewUser from './ViewUsers';
import BodyHeader from '../BodyHeader';

function User() {
    return ( 
        <div>
        <BodyHeader text="All User" btntext="Create User" link="/createuser"/>
        <ViewUser/>       
        </div>
     );
}

export default User;