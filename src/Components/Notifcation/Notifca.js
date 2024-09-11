// Notification.js
import React from 'react';
import '../../Assets/styles/Components/Notification.css';

const Notification = ({ name, date, message }) => {
  return (
    <div className="notification-card relative">
      <div className="notification-header">
        <h4>{name}</h4>
        <p>{date}</p>
      </div>
      <p  className='text-[.95rem] text-[#6d6d6d]'>{message}</p>
      <div className='text-3xl absolute  top-[-1px] right-0 w-[30px] h-[30px] rounded-[50%] bg-[#fff] flex  justify-center items-center transition duartion-[0.4s] hover:text-[#ff7f50] cursor-pointer'>&times;</div>
    </div>
  );
};

export default Notification;
