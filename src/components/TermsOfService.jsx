import React, {useState} from 'react'

export default function TermsOfService() {
    const [check, setCheck] = useState(false)
  return (
    <div>

        <input
            id="terms"
            type="checkbox"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}

        ></input>
        <label htmlFor='terms'> By Checking this box, you agree to our Terms & Conditions </label>
    </div>
  )
}
