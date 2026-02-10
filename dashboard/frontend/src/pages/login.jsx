import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Loginapi } from '../server/api.js';
import './css/login.css';
// 
function Login(){
    const navigate = useNavigate();
    const logincheck =async (e)=>{
        e.preventDefault(); // Prevent form submission
        const email=document.getElementById("formBasicEmail").value;
        const password=document.getElementById("formBasicPassword").value;
        const loginfail=document.querySelector('.loginfail');
        
        // Clear previous error message
        loginfail.style.display='none';
        
        console.log('Login attempt with:', email, password);
        
        try {
            const res=await Loginapi(email, password);
            console.log('Login response:', res);
            
            if (res && res.status==='success') {
                console.log('Login successful, navigating to home');
                navigate('/');
            }
            else {
                console.log('Login failed');
                loginfail.style.display='block';
            }
        } catch (error) {
            console.error('Login error:', error);
            loginfail.style.display='block';
        }
    }
    function register(){
        navigate('/register');
    }


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
            <h2 className="login-title">Login Account</h2>
            <p className="login-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <form className="login-form" onSubmit={logincheck}>
            <input id="formBasicEmail" type="email" placeholder="Email ID" />
            <input id="formBasicPassword" type="password" placeholder="Password" />
            <p className="loginfail" style={{color:'red', display:'none'}}>Login failed. Please try again.</p>
            <div className="options">
                <label>
                <input type="checkbox" /> Keep me signed in
                </label>
                <a onClick={register} className="member-link">
                New a member?
                </a>
            </div>

            <button type="submit" className="subscribe-btn">
                LOGIN
            </button>
            </form>
        </div>
        </div>
  );
};
export default Login;