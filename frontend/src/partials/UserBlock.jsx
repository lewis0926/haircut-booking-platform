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
import { useAuth } from "../contexts/AuthContext";
import { getUser } from "../network/userProfile.js";

function UserBlock() {

  const { currentUser, userInfo, login, setError } = useAuth();
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState(currentUser == null ? "" : userInfo.firstName + ' ' + userInfo.lastName);
  
  console.log(currentUser);

  if(currentUser!=null){
      getUser(currentUser.uid).then((res) => {
        // setUserName(res.firstName + ' ' + res.lastName);
        // setUser(res);
        // console.log(res);
      });

  }


  return (

      <section className="relative">
          <div className='text-center text-lg mt-16 md:mt-20 h-80'>
            {/* Form */}
            <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Email</label>
                      {/* <input id="name" type="text" className="form-input w-full text-gray-800 diasble" placeholder="Enter your email address" value="name" onChange={(e) => setEmail(e.target.value)} required /> */}
                      <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your email address" value="name" disabled/>
                   </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <Link to="/reset-password" className="text-sm font-medium text-rose-600 hover:underline">Having trouble signing in?</Link>
                      </div>
                      <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" value="name" disabled/>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                      <div className="text-gray-600 text-center">
                        <span className="text-rose-600 text-sm">{}</span>
                      </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
          </div>
      </section>
  )

}

export default UserBlock;