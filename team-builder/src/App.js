import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './TeamForm';
import TeamMember from './TeamMember';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }

  // AXIOS????

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <TeamForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember}/>
          )
        })
      }
    </div>
  );
}

export default App;
