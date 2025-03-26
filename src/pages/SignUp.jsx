import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import SignUpForm from '../components/SignUpForm';


const SignUp = () => {
  return (
    <div className="p-4" >
      <SignUpForm></SignUpForm>
      <h1 className="text-2xl font-bold">SignUp Page</h1>
      
    </div>
  );
};

export default SignUp;