import React, { useState } from 'react';

const UserListCommunity = ({ users, onUserClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          className="user-item"
          onClick={() => onUserClick(user.id)}
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="user-avatar"
          />
          <div className="user-details">
            <p className="user-name">{user.name}</p>
            <p className="user-message">
              {user.messages[0] || "No special message"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserListCommunity;
