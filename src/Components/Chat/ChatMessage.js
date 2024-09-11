import React from 'react';

const ChatMessage = ({ message }) => {
    return (
        <div className={`chat-message ${message.isMine ? 'mine' : 'theirs'}`}>
            <img src={message.profileImage} alt="Profile" />
            <div className="message-content">
                <p>{message.text}</p>
                {message.image && <img src={message.image} alt="Attached" />}
                <span>{message.time}</span>
            </div>
        </div>
    );
};

export default ChatMessage;
