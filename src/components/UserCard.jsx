import React from 'react'
import '../App.css'

const UserCard = ({name,age,role,location}) => {
  return (
    <div className='user-card'>
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Role: {role}</p>
        <p>Location: {location}</p>

    </div>
  );
}

export default UserCard;