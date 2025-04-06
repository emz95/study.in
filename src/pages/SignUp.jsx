import React from 'react';
import SignUpForm from '../components/SignUpForm';
import { Link } from 'react-router-dom';
import TermsOfService from '../components/TermsOfService';



const SignUp = () => {
  return (
    <div className="p-4" >
      <h1 className="text-2xl font-bold">SignUp</h1>
      <p>Create a free account</p>
      <SignUpForm></SignUpForm>
      <p>Already have an account?</p>
      <Link to="/login">Login here</Link>
      
    </div>
  );
};

export default SignUp;