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
      <div className='team-container'>
      {
        teamMembers.map(teamMember => {
          return (
            <div className='member-group'>
              <TeamMember key={teamMember.id} details={teamMember}/>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
