import React, {useState} from 'react'
import OnOffCampus from './OnOffCampus';
import Rank from './Rank';
import { useNavigate } from 'react-router-dom';

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

    const handleSubmit = async() => {
        try{
            //geting rank const rankOfWifi = items.indexOf("Reliable Wifi") + 1;

            //navigate('/home')
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
            >Continue</button>

    </div>
  )
}
