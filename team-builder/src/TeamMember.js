import React from "react";

export default function TeamMember(props) {
  const { details } = props

  if (!details) {
    return <h3>Fetching team member details...</h3>
  }

  return (
    <div className='member-container'>
      <h3>{details.name}</h3>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}