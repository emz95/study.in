import React, {useState} from 'react'
import OnOffCampus from './OnOffCampus';
import Rank from './Rank';
import { useNavigate } from 'react-router-dom';
import { writeUserPreferences } from '../firebase/write_User_Preferences';

export default function PreferencesForm() {
    const [studyLocation, setStudyLocation] = useState(""); 
    const [preferences, setPreferences] = useState([ 
      "Reliable Wifi",
      "Abundant Seating",
      "Outlets Available",
      "Ambience",
      "Minimal Crowdedness"
    ]);
    const navigate = useNavigate();

    const data = {
      onCampus: studyLocation === "on-campus",
      wifi: preferences.indexOf("Reliable Wifi") + 1,
      seating: preferences.indexOf("Abundant Seating") + 1,
      outlet: preferences.indexOf("Outlets Available") + 1,
      ambience: preferences.indexOf("Ambience") + 1,
      crowd: preferences.indexOf("Minimal Crowdedness") + 1
    };

    const handleSubmit = async() => {
        
        try{
            await writeUserPreferences(data)
            navigate('/home')
        } catch (err){

        }
    };

    return (

    <div>
        <p>Where do you prefer to study?</p>
        <OnOffCampus option={studyLocation} setOption={setStudyLocation} />
         <p>Rank from 1-5 what you are looking for in a study environment.</p>
        <Rank items={preferences} setItems={setPreferences} />
        <button
            onClick={handleSubmit}
            disabled={!studyLocation}
            >Continue</button>

    </div>
  )
}
