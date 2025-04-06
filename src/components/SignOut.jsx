import React, {useState} from 'react'
import { signOutUser } from '../firebase/auth_signout'
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const handleSignOut = async(e) =>{
        const result = await signOutUser();
        if(result.success){
            navigate('/login')
        } else {
            setError(result.error)
        }
    }

  return (
    <div>
        <button
            onClick={handleSignOut}
        >Sign out</button>
        {error && <p className="text-red-500">{error}</p>}

    </div>
  )
}
