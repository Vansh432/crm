import React, { useState } from 'react';
import './Email.css';
import { FaInbox, FaPaperPlane, FaRegTrashAlt, FaStar, FaEnvelopeOpenText, FaSyncAlt, FaEllipsisV } from 'react-icons/fa';

function Email() {
  const [emails, setEmails] = useState([
    { id: 1, sender: "Madison Turner", subject: "Unlock the Power of Your Data with Our Dynamic Dashboard Template", time: "04:08 PM", starred: false, selected: false, body: "Dear John Smith, ... (full email content here)" },
    { id: 2, sender: "Madison Turner", subject: "Unlock the Power of Your Data with Our Dynamic Dashboard Template", time: "04:08 PM", starred: false, selected: false, body: "Dear John Smith, ... (full email content here)" },
    { id: 3, sender: "Madison Turner", subject: "Unlock the Power of Your Data with Our Dynamic Dashboard Template", time: "04:08 PM", starred: false, selected: false, body: "Dear John Smith, ... (full email content here)" },
    { id: 4, sender: "Madison Turner", subject: "Unlock the Power of Your Data with Our Dynamic Dashboard Template", time: "04:08 PM", starred: false, selected: false, body: "Dear John Smith, ... (full email content here)" },
    { id: 5, sender: "Madison Turner", subject: "Unlock the Power of Your Data with Our Dynamic Dashboard Template", time: "04:08 PM", starred: false, selected: false, body: "Dear John Smith, ... (full email content here)" },
    { id: 6, sender: "Madison Turner", subject: "Unlock the Power of Your Data with Our Dynamic Dashboard Template", time: "04:08 PM", starred: false, selected: false, body: "Dear John Smith, ... (full email content here)" },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null); // State for selected email

  const toggleStarred = (id) => {
    setEmails(emails.map(email => email.id === id ? { ...email, starred: !email.starred } : email));
  };

  const toggleSelected = (id) => {
    setEmails(emails.map(email => email.id === id ? { ...email, selected: !email.selected } : email));
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setEmails(emails.map(email => ({ ...email, selected: newSelectAll })));
  };

  const openEmail = (email) => {
    setSelectedEmail(email);
  };

  const backToList = () => {
    setSelectedEmail(null);
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>David McMichael</h2>
        <ul>
          <li><FaInbox /> Inbox</li>
          <li><FaEnvelopeOpenText /> All Mail</li>
          <li><FaPaperPlane /> Sent</li>
          <li>Draft</li>
          <li><FaRegTrashAlt /> Trash</li>
          <li><FaStar /> Starred</li>
          <li>Unread</li>
        </ul>
      </div>

      {/* Conditional Rendering for Email List or Email Detail */}
      <div className="content">
        {selectedEmail ? (
          <div className="email-detail">
            <div className="email-detail-header">
              <h2>{selectedEmail.subject}</h2>
              <button onClick={backToList}>Back to Inbox</button>
            </div>
            <p>From: {selectedEmail.sender}</p>
            <p>{selectedEmail.body}</p>
            <div className="email-actions">
              <button className="btn-reply">Reply</button>
              <button className="btn-forward">Forward</button>
            </div>
          </div>
        ) : (
          <div className="email-list">
            {/* Header with Select All Checkbox */}
            <div className="email-header">
              <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
              <FaSyncAlt className="header-icon" />
              <FaEllipsisV className="header-icon" />
            </div>

            {/* Emails */}
            {emails.map((email) => (
              <div className="email-item" key={email.id} onClick={() => openEmail(email)}>
                <input type="checkbox" checked={email.selected} onChange={(e) => { e.stopPropagation(); toggleSelected(email.id); }} />
                <span className={email.starred ? 'starred' : 'star'} onClick={(e) => { e.stopPropagation(); toggleStarred(email.id); }}>★</span>
                <span className="sender">{email.sender}</span>
                <span className="subject">{email.subject}</span>
                <span className="time">{email.time}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Email;
