import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TermsOfService from './TermsOfService'
import { signUpWithEmail } from "../firebase/auth_signup_password";



function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async(e) =>{
        e.preventDefault();
        setError("");
        setLoading(true);
        const result = await signUpWithEmail(email, password);

        if(result.success) {
            navigate('/preferences');
        } else {
            setError(result.error);
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