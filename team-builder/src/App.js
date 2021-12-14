import React, { useState } from 'react';
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
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <TeamForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      <h2>The Team:</h2>
      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember} details={teamMember}/>
          )
        })
      }
    </div>
  );
}

export default App;
