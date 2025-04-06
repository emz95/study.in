import React from 'react';
import { useNavigate } from 'react-router-dom'

// declaring a fucntion (same as function GetStarted() {...})
const GetStarted = () => { 
    const navigate = useNavigate();  // initialize navigation hook

    return (
        // The main container that takes up the full screen height
        <div className="h-screen w-full bg-white">
            {/* Center everything vertically and horizontally */}
            <div className="h-full flex flex-col items-center justify-between p-8">
                {/* Title section */}
                <div className="flex-grow flex items-center">
                    <h1 className="text-4xl" style={{ color: '#333333' }}>
                        study.in
                    </h1>
                </div>

                {/* Button section */}
                <div className="w-full max-w-sm mb-16">
                    <button 
                        onClick={() => navigate('/signup')}
                        style={{
                            backgroundColor: '#69A297',
                            width: '100%',
                            padding: '14px',
                            borderRadius: '6px',
                            color: 'white',
                            border: 'none'
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

// export component
export default GetStarted;