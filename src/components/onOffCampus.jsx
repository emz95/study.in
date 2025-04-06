import React, { useState } from 'react';

export default function OnOffCampus({option, setOption}) {

  return (
    <div>
        <label> 
            <input 
                type="radio"
                name="locPref"
                value="campus"
                checked={option === "campus"}
                onChange={(e) => setOption(e.target.value)}
                ></input>
            On campus
        </label>

        <label> 
            <input 
                type="radio"
                name="locPref"
                value="offCampus"
                checked={option === "offCampus"}
                onChange={(e) => setOption(e.target.value)}
            ></input>
            Off campus
        </label>
    </div>
  )
}
