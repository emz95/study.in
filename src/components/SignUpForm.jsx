import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async(e) =>{
        e.preventDefault();
        setError("");
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err){
            setError(err.message);
        }
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
        </form>
    )

}

export default SignUpForm;