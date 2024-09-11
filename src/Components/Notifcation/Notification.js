import React from 'react';
import Notification from './Notifca';

const Notifications = ({ name, date, message }) => {
  const notifications = [
    {
      name: "Jane D. Smith",
      date: "Jul 13, 2024",
      message: "Our latest HRM update focuses on enhancing employee engagement through new interactive platforms and personalized feedback systems."
    },
    {
      name: "Jane D. Smith",
      date: "Jul 13, 2024",
      message: "Our latest HRM update focuses on enhancing employee engagement through new interactive platforms and personalized feedback systems."
    },
    {
      name: "Jane D. Smith",
      date: "Jul 13, 2024",
      message: "Our latest HRM update focuses on enhancing employee engagement through new interactive platforms and personalized feedback systems."
    }
    // You can add more notifications here
  ];
  //0 4px 8px rgba(0, 0, 0, 0.1);

  return (
    <div className="p-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[10px] bg-[#fff] h-[407px]">
        <h2 className='text-[20px] text-[#444050] font-[600]'>Notifications</h2>
        <div className='overflow-y-auto overflow-hidden h-[92%] p-[5px]' >
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          name={notification.name}
          date={notification.date}
          message={notification.message}
        />
      ))}
      </div>
    </div>
  );

};

export default Notifications;
