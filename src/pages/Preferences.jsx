import React from 'react';
import PreferencesForm from '../components/PreferencesForm';

const Survey = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Account Preferences</h1>
      <p>Please fill out the questions below.</p>
      <PreferencesForm></PreferencesForm>

     
    </div>
  );
};

export default Survey;