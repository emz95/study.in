import React from 'react';
import { useNavigate } from 'react-router-dom'

// declaring a fucntion (same as function GetStarted() {...})
const GetStarted = () => { 
    const navigate = useNavigate();  // initialize navigation hook

    // return the UI elements
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">
            Get Started Page
        </h1>
        <button 
            onClick={() => navigate('/home')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            Get Started
        </button>
        </div>
    );
};

// export component
export default GetStarted;