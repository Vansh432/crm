// src/MeetingSchedule.js
import React from 'react';
import '../Assets/styles/Components/MeetingSchedule.css';

const MeetingSchedule = () => {
  const meetings = [
    { title: 'Project Kickoff', date: 'June 1, 2024', time: '10:00 AM' },
    { title: 'Weekly Team Sync', date: 'June 5, 2024', time: '02:00 PM' },
    { title: 'Client Presentation', date: 'June 10, 2024', time: '11:00 AM' },
    { title: 'Monthly Review', date: 'June 15, 2024', time: '03:00 PM' },
    { title: 'Weekly Review', date: 'June 20, 2024', time: '11:00 AM' },
    { title: 'Yearly Meeting', date: 'June 22, 2024', time: '09:00 AM' },
    { title: 'Strategy Planning', date: 'June 28, 2024', time: '02:00 PM' },
  ];

  return (
    <div className="meeting-schedule ">
      <h2 className='text-[20px] text-[#444050]'>Meeting Schedule</h2>
      <table>
        <thead>
          <tr style={{backgroundColor:"#ff7f50"}}>
            <th>Meeting Title</th>
            <th>Meeting Date</th>
            <th>Meeting Time</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, index) => (
            <tr key={index}>
              <td>{meeting.title}</td>
              <td>{meeting.date}</td>
              <td>{meeting.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingSchedule;
