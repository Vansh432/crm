// src/StatCard.js
import React from 'react';
import '../Assets/styles/Components/StatCard.css'; // Import the CSS for styling
import employee from '../Assets/images/emplyeeIcon.png'

const StatCard = ({ title, icon,count, comparison, percentageChange }) => {
  return (
    <div className="stat-card flex justify-evenly items-center">
    <div  className='w-[65px] h-[65px]  rounded-[50%] flex justify-center items-center bg-[#ff7f5017]'>
        {icon}
    </div>
    <div>
      <h1 className='text-[16px] font-[600] text-[#878a99] tracking-[.3px] text-left '>{title}</h1>
      <div className='flex items-center'>
    <h2 className='text-[24px] font-[600]'>{count}</h2>
    <div className='text-left ml-[5px]'>
    <span className='block text-[.8rem] text-[#04c804]'>{percentageChange}</span>
    <span className='text-[.9rem] text-[#878a99]'>{comparison}</span>
    </div>
      </div>
    </div>
    </div>
  );
};

export default StatCard;
