import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import http from "../api/http-common.js";
import Footer from "../partials/Footer.jsx";
import Header from "../partials/Header.jsx";
import UserBlock from '../partials/UserBlock.jsx';

function UserProfile() {



  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <UserBlock />


      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />

    </div>
  );


}
export default UserProfile;
