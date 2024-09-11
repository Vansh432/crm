import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar = ({ contacts, recentChats }) => {
    return (
        <div className="sidebar w-[30%]" style={{width:"30%",background:"#ffff"}}>
            <div className="user-profile flex items-center justify-between"><div className="flex items-center">
                <img src={contacts.profileImage} alt="Profile" />
                <div className='ml-[10px]'>
                <h3>{contacts.name}</h3>
                <p className='text-[.8rem] text-[#8c8c8c] tracking-[.5px] text-left'>{contacts.position}</p>
                </div>
                </div>
                <div className='w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-[#faf9f9]'>
                <IoSettingsOutline className='text-[1.2rem] text-[#000]' />

                </div>
            </div>
            <input type="text" placeholder="Search Contact" className="search-box" />
            <div className="recent-chats">
                {recentChats.map((chat, index) => (
                    <div key={index} className="chat-item">
                        <img src={chat.profileImage} alt="Profile" />
                        <div className="chat-details">
                            <h4>{chat.name}</h4>
                            <p>{chat.lastMessage}</p>
                            <span>{chat.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
