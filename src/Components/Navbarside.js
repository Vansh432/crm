// src/Sidebar.js
import React from 'react';
import '../Assets/styles/Components/Sidebar.css';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar" style={{width:"16.75% ",backgroundColor:"#fff",}}>
       <Link to="/"> <div className="sidebar-item active">Dashboards</div></Link> 
     <Link to="/chat"> <div className="sidebar-item">Chat</div></Link>
     <Link to="/email">  <div className="sidebar-item">Email</div></Link>
      <div className="sidebar-item">Clients</div>
      <Link to="/project"> <div className="sidebar-item">Projects</div></Link>
       <div className="sidebar-item">Activities</div>
      <div className="sidebar-item">Training</div>
      <div className="sidebar-item">Resignation</div>
      <div className="sidebar-item">Award</div> 
      <div className="sidebar-item">Meeting</div>
      <Link to="/ticket"><div className="sidebar-item">Tickets</div></Link> 
      <Link to="/ticket"> <div className="sidebar-item">Document</div> </Link>
      <Link to="/Announcement"> <div className="sidebar-item">Announcement</div></Link>
      <Link to="/warning"> <div className="sidebar-item">Warning</div></Link>
      <div className="sidebar-item">Termination</div>
      <div className="sidebar-item">Invoice</div>
      <div className="sidebar-title">PAGES</div>
      <div className="sidebar-item">Authentication</div>
      <div className="sidebar-item">Error</div>
      <div className="sidebar-item">Pages</div>
    </div>
  );
};

export default Sidebar;
