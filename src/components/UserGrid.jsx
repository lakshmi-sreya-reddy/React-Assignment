import React, { useState } from "react";
import UserCard from "./UserCard";
import usersData from "../data/users";
import '../App.css';

const UserGrid = () => {
  const [allUsers, setAllUsers] = useState([]);

  const showUsers = () => {
    setAllUsers(usersData);   // load users only when button is clicked
  };

  return (
    <div>
      <h2>Users List</h2>

      <button onClick={showUsers}>Show Users</button>

      <div className="grid-container">
        {allUsers.length === 0 ? (
          <p>No users loaded. Click the button.</p>
        ) : (
          allUsers.map((u) => (
            <UserCard
              key={u.id}
              name={u.name}
              age={u.age}
              role={u.role}
              location={u.location}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserGrid;
