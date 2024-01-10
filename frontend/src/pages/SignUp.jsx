import React, { useState } from 'react';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import CustomerSignUpForm from "../partials/CustomerSignUpForm";
import StylistSignUpForm from "../partials/StylistSignUpForm";

function SignUp() {
  const [isCustomer, setIsCustomer] = useState(true);

  const toggleForm = () => {
    setIsCustomer((prevIsCustomer) => !prevIsCustomer);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {isCustomer ? <CustomerSignUpForm /> : <StylistSignUpForm />}

      <div className="text-center mt-4">
        <button
          onClick={toggleForm}
          className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
        >
          {isCustomer ? "Switch to Stylist Sign Up" : "Switch to Customer Sign Up"}
        </button>
      </div>

      <Banner />

    </div>
  );
}

export default SignUp;
