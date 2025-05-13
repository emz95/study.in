import React from 'react';
import { useNavigate } from 'react-router-dom'
import './GetStarted.css'

// declaring a fucntion (same as function GetStarted() {...})
const GetStarted = () => { 
    const navigate = useNavigate();  // initialize navigation hook

    return (
        // The main container that takes up the full screen height
        <div className="get-started-container">
            {/* Center everything vertically and horizontally */}
            <div div style={{ textAlign: 'center' }}>
                {/* Title section */}
                <div >
                    <h1 style={{ color: '#333333' }}>
                        study.in
                    </h1>
                </div>

                {/* Button section */}
                <div style={{ maxWidth: '300px', margin: '0 auto' }}>
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