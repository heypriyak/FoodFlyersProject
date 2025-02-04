import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [message, setMessage] = useState("");  // State to store success/error message

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch('https://shop-smart-fxg5.onrender.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      setMessage("Login successful!");  // Set success message
      window.location.replace("/");
    }
    else {
      setMessage("Login failed: " + responseData.errors);  // Set error message
    }
  }

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch('https://shop-smart-fxg5.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      setMessage("Signup successful!");  // Set success message
      window.location.replace("/");
    }
    else {
      setMessage("Signup failed: " + responseData.errors);  // Set error message
    }
  }

  const logout = () => {
    localStorage.removeItem('auth-token');
    setMessage("Logged out successfully!");  // Set logout message
    window.location.replace("/");
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button className='' onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ?
          <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login here</span> </p> :
          <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span> </p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {message && <p className="message">{message}</p>}  {/* Display message */}
      </div>
    </div>
  )
}

export default LoginSignup
