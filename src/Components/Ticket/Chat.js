import React, { useState } from 'react';

import ChatWindow from '../Chat/ChatWindow';





function Chat() {
    const [messages, setMessages] = useState([
        { isMine: false, text: "If I don't like something, I'll stay away from it.", time: '2 hours ago', profileImage: 'path-to-image' },
        { isMine: true, text: "I want more detailed information.", time: '2 hours ago', profileImage: 'path-to-image' },
        // more messages...
    ]);

    const contacts = {
        profileImage: 'path-to-image', 
        name: 'David McMichael', 
        position: 'Marketing Director'
    };

    const recentChats = [
        { profileImage: 'path-to-image', name: 'Mitchell Flintoff', lastMessage: 'You: Yesterday was great...', time: '15 mins' },
        // more recent chats...
    ];

    const addMessage = (text) => {
        const newMessage = {
            isMine: true,
            text: text,
            time: 'Just now',
            profileImage: 'path-to-your-image', // Replace with your profile image path
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="">
   
        <div className='app-container flex h-[100vh]'>
   
            <ChatWindow messages={messages} addMessage={addMessage} />
            </div>
        </div>
    );
}

export default Chat;
