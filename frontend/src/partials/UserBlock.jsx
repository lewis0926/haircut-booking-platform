//to-do user profile localhost:8000/customer/659efd3c64dbddca61ae859a
// {
//     "_id": "659efd3c64dbddca61ae859a",
//     "firstName": "testing",
//     "lastName": "eleven",
//     "email": "testing11@gmail.com",
//     "phone": "1234567890",
//     "createdAt": "2024-01-10T20:25:33.490Z",
//     "updatedAt": "2024-01-10T20:25:33.490Z",
//     "__v": 0
// }

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../images/scissor.png';
import { auth } from "../config/firebase.js";
import { useAuth } from "../contexts/AuthContext.jsx";
import {getUser} from "../network/userProfile.js";

function UserBlock() {

  const { currentUser, login, setError } = useAuth();
  const [user, setUser] = useState('');
  console.log(currentUser);

  if(currentUser!=null){
      getUser(currentUser.uid).then((res) => {
        setUserName(res.firstName + ' ' + res.lastName);
        setUser(res);
        console.log(res);
      });

  }


  return (

      <section className="relative">
          <div className='text-center text-lg mt-16 md:mt-20 h-80'>
            todo: profile
          </div>
      </section>
  )

}

export default UserBlock;