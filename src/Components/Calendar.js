// src/CalendarComponent.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../Assets/styles/Components/Calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [view, setView] = useState('month');
  const events = [
    {
      title: 'Punch In',
      start: new Date(2024, 4, 30, 9, 20),
      end: new Date(2024, 4, 30, 9, 30),
      color: 'green'
    },
    {
      title: 'Meeting',
      start: new Date(2024, 4, 30, 12, 0),
      end: new Date(2024, 4, 30, 13, 0),
      color: 'blue'
    },
    {
      title: 'Punch Out',
      start: new Date(2024, 4, 30, 17, 30),
      end: new Date(2024, 4, 30, 17, 40),
      color: 'red'
    }
  ];

  const handleSelectEvent = event => {
    alert(`Event: ${event.title}`);
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = event.color || '#3174ad';
    const style = {
      backgroundColor,
      borderRadius: '5px',
      color: 'white',
      border: '0px',
      display: 'block',
    };
    return {
      style: style,
    };
  };

  return (
    <div className="calendar-component" style={{marginBottom:"15px"}}>
     <h2 className='text-[20px] text-[#444050] font-[600] mb-[20px]'> Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        view={view}
        onView={(view) => setView(view)}
        eventPropGetter={eventStyleGetter}
        selectable
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default CalendarComponent;
