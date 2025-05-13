import React from 'react';
import PreferencesForm from '../components/PreferencesForm';
import './Preferences.css'
const Survey = () => {
  return (
    <div className="survey-wrapper">
      <div className='survey-container'>
      <h1 className="text-2xl font-bold">Account Preferences</h1>
      <p>Please fill out the questions below.</p>
      <PreferencesForm></PreferencesForm>

      </div>
    </div>
  );
};

export default Survey;