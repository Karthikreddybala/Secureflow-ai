import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Registerapi } from '../server/api';
import './css/login.css';
import Login from './login';

function Register(){
    const navigate = useNavigate();
    const Login =()=>{
        navigate('/login');
    }
    const Loginuser =()=>{
        navigate('/login');
    }
    const registercheck =async ()=>{
        const success = true; // Replace with actual register logic
        const email=document.getElementById("formBasicEmail").value;
        const password=document.getElementById("formBasicPassword").value;
        console.log(email);
        console.log(password);
        const res=await Registerapi(email, password);
        console.log(res);
        console.log('Register selected:');
        if (success) {
            navigate('/login');
    }};
    return(
            <div className="login-container">
        {/* Left Section */}
        <div className="left-section">
            <div className="company-name">🏢 COMPANY NAME</div>

            <div className="welcome-text">
            <p className="small-text">Nice to see you again</p>
            <h1 className="main-title">WELCOME BACK</h1>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
            <h2 className="login-title">Register Account</h2>
            <p className="login-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <form className="login-form"  onSubmit={registercheck}>
            <input id="formBasicEmail" type="email" placeholder="Email ID" />
            <input id="formBasicPassword" type="password" placeholder="Password" />

            <div className="options">
                {/* <label>
                <input type="checkbox" /> Keep me signed in
                </label> */}
                <a onClick={Loginuser} className="member-link"> Already a member?
                </a>
            </div>

            <button type="submit" className="subscribe-btn">
                LOGIN
            </button>
            </form>
        </div>
        </div>
    )
}
export default Register;