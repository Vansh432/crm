import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';


import './Chat.css';

function Chat() {
    const [messages, setMessages] = useState([
        { isMine: false, text: "If I don't like something, I'll stay away from it.", time: '2 hours ago', profileImage: 'https://html.bdevs.net/manez.prev/assets/images/avatar/avatar8.png' },
        { isMine: true, text: "I want more detailed information.", time: '2 hours ago', profileImage: 'https://html.bdevs.net/manez.prev/assets/images/avatar/avatar8.png' },
        // more messages...
    ]);

    const contacts = {
        profileImage: 'https://html.bdevs.net/manez.prev/assets/images/avatar/avatar1.png', 
        name: 'David McMichael', 
        position: 'Marketing Director'
    };

    const recentChats = [
        { profileImage: 'https://html.bdevs.net/manez.prev/assets/images/avatar/avatar8.png', name: 'Mitchell Flintoff', lastMessage: 'You: Yesterday was great...', time: '15 mins' },
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
   
        <div className='app-container'>
            <Sidebar contacts={contacts} recentChats={recentChats} />
            <ChatWindow messages={messages} addMessage={addMessage} />
            </div>
        </div>
    );
}

export default Chat;
