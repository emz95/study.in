import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import TermsOfService from './TermsOfService'



function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {signup} = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getErrorMessage = (code) =>{
        switch (code) {
            case 'auth/email-already-in-use':
                return 'This email is already in use.';
            case 'auth/invalid-email':
                return 'Please enter a valid email address.';
            case 'auth/weak-password':
                return 'Password should be at least 6 characters.';
            case 'auth/missing-password':
                return 'Please enter a password.';
            default:
                return 'Something went wrong. Please try again.';
            
        }
    }

    const handleSignUp = async(e) =>{
        e.preventDefault();
        setError("");
        setLoading(true)
        try{
            await signup(email, password);
            navigate('/preferences');

            //history.push('/') send to next page
        } catch (err){
            setError(getErrorMessage(err.code));
        }
        setLoading(false)
    }


    return (
        <form onSubmit={handleSignUp}>
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                >
            </input>
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                >

            </input>
            <br/>
            <TermsOfService></TermsOfService>
            <button 
                disabled={loading}
                type="submit">
                    Continue
            </button >
            {error && <p className="text-red-500">{error}</p>}

        </form>
    )

}

export default SignUpForm;