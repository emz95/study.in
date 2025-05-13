import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <div className="login-wrapper" >
      <div className='login-content'>
      <h1 className="text-2xl font-bold">Welcome back!</h1>
      <p>Please enter your login details below.</p>
      <LoginForm></LoginForm>
      <p>Don't have an account?</p>
      <Link to="/signup">Sign up for free</Link>
      </div>
    </div>
  );
};

export default Login;