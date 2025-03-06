import React, { useState } from 'react';

const WriteBoxCommunity = ({ activeUser, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && activeUser) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="message-section">
      <input
        type="text"
        placeholder={activeUser ? "Type Message" : "Choose user"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={!activeUser} 
      />
      <button onClick={handleSend} disabled={!activeUser || !message.trim()}>
        Send
      </button>
    </div>
  );
};

export default WriteBoxCommunity;
