import React from 'react';
import SignupForm from '../components/SignupForm';
import { Link } from 'react-router-dom';
import './SignUp.css'



const SignUp = () => {
  return (
    <div className="signup-wrapper" >
      <div className='signup-content'>
      <h1 className="text-2xl font-bold">SignUp</h1>
      <p>Create a free account</p>
      <SignupForm></SignupForm>
      <p>Already have an account?</p>
      <Link to="/login">Log in here</Link>
      </div>
    </div>
  );
};

export default SignUp;