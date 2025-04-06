import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginWithEmail } from "../firebase/auth_signin_password";


function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();
        setError("");
        setLoading(true);
        const result = await loginWithEmail(email, password);

        if(result.success) {
            navigate('/home');
        } else {
            setError(result.error);
        } 

        setLoading(false)
    }


    return (
        <form onSubmit={handleLogin}>
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
            <button 
                disabled={loading}
                type="submit">
                    Continue
            </button >
            {error && <p className="text-red-500">{error}</p>}

        </form>
    )

}

export default LoginForm;