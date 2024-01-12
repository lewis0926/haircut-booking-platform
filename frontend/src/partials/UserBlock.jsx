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
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  if(currentUser!=null){
      getUser(currentUser.uid).then((res) => {
        console.log(res);
        setFirstName(res.firstName);
        setLastName(res.lastName);
        setEmail(res.email);
        setPhone(res.phone);
        // setUser(res);
        // console.log(res);
      });

  }


  return (

      <section className="relative">
          <div className='text-lg mt-4 md:mt-4 h-96'>
            {/* Form */}
            <div className="max-w-sm mx-auto">
                <form onSubmit={(e)=>handleSubmit(e)}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">FirstName</label>
                      <input id="name" type="text" className="form-input w-full text-gray-800" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                   </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Last Name</label>
                      <input id="name" type="text" className="form-input w-full text-gray-800" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                   </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Email</label>
                      <input id="name" type="text" className="form-input w-full text-gray-800" value={email} onChange={(e) => setEmail(e.target.value)}/>
                   </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Phone</label>
                      <input id="name" type="text" className="form-input w-full text-gray-800" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                   </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-rose-700 hover:bg-rose-800 w-full">Update Profile</button>
                    </div>
                  </div>
                </form>
              </div>
          </div>
      </section>
  )

}

export default UserBlock;