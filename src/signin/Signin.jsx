import React from 'react';

const Signin = () => {
    return (
        <div>
            <form action="" class="p-3 m-0 border-0 bd-example m-0 border-0">
   <div class="mb-3 row">
   <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
   <div class="col-sm-10">
     <input type="email" class="form-control" id="inputEmail" value="email@example.com" data-has-listeners="true"/>
   </div>
 </div>
 
 <div class="mb-3 row">
   <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
   <div class="col-sm-10">
     <input type="password" class="form-control" id="inputPassword" data-has-listeners="true"/>
   </div>
 </div>

  </form>
        </div>
    );
}

export default Signin;
