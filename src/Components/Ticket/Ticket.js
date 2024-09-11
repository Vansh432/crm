import React from 'react';
import Tickets from './Tickets';
import './Ticket.css'; // Custom CSS

const sampleData = [
    {
      ticketId: '#001',
      ticketTitle: 'Website Down',
      priority: 'Medium',
      date: '2024-06-01',
      createdBy: 'John Doe',
      lastReply: '2024-06-02',
      status: 'Open',
    },
    {
      ticketId: '#002',
      ticketTitle: 'Email Delivery Issue',
      priority: 'Low',
      date: '2024-06-03',
      createdBy: 'Jane Smith',
      lastReply: '2024-06-04',
      status: 'In Progress',
    },
    {
      ticketId: '#003',
      ticketTitle: 'Product Inquiry',
      priority: 'High',
      date: '2024-06-05',
      createdBy: 'Michael Johnson',
      lastReply: '2024-06-06',
      status: 'Closed',
    },
    // Add more sample data...
  ];
function App() {
  return (
    <div className="App">
      <Tickets data={sampleData}  />
    </div>
  );
}

export default App;
