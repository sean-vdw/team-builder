import React from "react";

export default function TeamForm(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <div className='form-group'>
        <label>Name 
          <input 
            name='name'
            type='text'
            placeholder='Enter Name'
            maxLength='25'
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>Email 
          <input 
            name='email'
            type='email'
            placeholder='john.happyseed@gmail.com'
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>Role 
          <select value={values.role} name='role' onChange={onChange}>
            <option value=''> - Select Role - </option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Designer'>Designer</option>
            <option value='Team Lead'>Team Lead</option>
          </select>
        </label>
        <div className='submit'>
          <button>Submit</button>
        </div>
      </div>
    </form>
  )

}