import React, { useState } from 'react';
import '../pages/styles/ProfileHeader2.css';

const FollowButton = ({ onFollowToggle }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const toggleFollow = () => {
    const newState = !isFollowed; // Calculate the new state
    setIsFollowed(newState); // Update the local state
    onFollowToggle(newState); // Notify parent with the correct new state
  };

  return (
    <button
      className={`Follow-btn ${isFollowed ? 'followed' : ''}`}
      onClick={toggleFollow}
    >
      {isFollowed ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;
