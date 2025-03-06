import React from 'react';

const ChatBoxCommunity = ({ activeUser, messages }) => {
  return (
    <div className="chat-box">
      {activeUser ? (
        <>
          <div className="selected-user">
            <img src={activeUser.avatar} alt={activeUser.name} className="user-avatar-chat" />
            <span className="Chat-UserName">{activeUser.name}</span>
          </div>

          {}
          {activeUser.messages.length > 0 && (
            <div className="user-message-in-chat">
              {activeUser.messages[0]} {}
            </div>
          )}

          <div className="messages">
            {messages.map((message, index) => (
              <div 
              key={index} 
              className={`message-item ${message.isUserMessage ? 'my-message' : 'other-message'}`}
            >
              {message.text}
            </div>
            ))}
          </div>
        </>
      ) : (
        <p className="no-user-selected">Choose User</p>
      )}
    </div>
  );
};

export default ChatBoxCommunity;
