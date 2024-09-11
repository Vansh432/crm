import React from 'react';
import AnnouncementTable from './AnnouncementTable';

function Announcement() {
  return (
    <div className="shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[10px] bg-[#fff] p-[20px]">
      <h1 className='text-2xl'>Announcement</h1>
      <AnnouncementTable />
    </div>
  );
}

export default Announcement;
