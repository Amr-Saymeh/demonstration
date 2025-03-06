import React, { useState } from 'react';
import UserListCommunity from '../components/UserListCommunity';
import ChatBoxCommunity from '../components/ChatBoxCommunity';
import WriteBoxCommunity from '../components/WriteBoxCommunity';
import '../pages/styles/Community.css';
import Navbar from '../components/navbar';

const Community = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Maggie Smith', avatar: 'https://www.palestineremembered.com/Jerusalem/GeoPoint/Dome_Of_The_Rock-10150.jpg', messages: ['Hey, I’m interested in your work'] },
    { id: 2, name: 'Emma Watson', avatar: 'https://image.made-in-china.com/2f0j00QWagThVImqzc/Birthday-Wedding-Party-Club-Promotion-Gift-Flower-Red-Fresh-Cut-Flower-Rose.jpg', messages: ['I’m a big fan of your art...'] },
    { id: 3, name: 'Donald Johnson', avatar: 'https://www.alquds.co.uk/wp-content/uploads/2023/10/06-10-730x438.jpg', messages: ['i’d like to commission a piece from you'] },
    { id: 4, name: 'Sophia Williams', avatar: 'https://meaningnames.net/write/19/%D9%86%D8%A7%D8%A8%D9%84%D8%B3.png', messages: ['Your art is amazing,keep up the great work!'] },
    { id: 5, name: 'Danial Miller', avatar: 'https://ih1.redbubble.net/image.963338054.6243/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', messages: ['i’m a collector and i’d like to discuss purchasing your'] },
  ]);

  const [activeUserId, setActiveUserId] = useState(null);

  const handleUserClick = (userId) => {
    setActiveUserId(userId);
  };

  const handleSendMessage = (message) => {
    if (activeUserId !== null) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === activeUserId
            ? { 
                ...user, 
                messages: [...user.messages, { text: message, isUserMessage: true }] 
              }
            : user
        )
      );
    }
  };

  const activeUser = users.find((user) => user.id === activeUserId);
  const activeMessages = activeUser ? activeUser.messages : [];

  return (
    <div>
    <div className="shop-styling"><Navbar IsWithSearch={false} /></div>

    <div className="community">
    <div className="CommBody">
          <UserListCommunity users={users} onUserClick={handleUserClick} />
          <div className="main-content">
            <ChatBoxCommunity activeUser={activeUser} messages={activeMessages} />
            <WriteBoxCommunity activeUser={activeUser} onSendMessage={handleSendMessage} />
          </div>
        </div>
    </div>
    </div>
  );
};

export default Community;
