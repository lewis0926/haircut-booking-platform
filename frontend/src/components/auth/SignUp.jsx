
import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {register} from "../../apis/customerApi.jsx";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, setError } = useAuth();

  useEffect(() => {
    if (currentUser) {
    }
  }, [currentUser]);

  const signUp = (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      register({"email":email, "password":password, "firstName": firstName,
      "lastName": lastName, "phone": phone});
    } catch (e) {
      setError("Failed to register");
    }

    setLoading(false);
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
