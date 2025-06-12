// src/components/Admin/MessageLog.js
import React from "react";

const MessageLog = ({ messages, searchTerm, setSearchTerm }) => {
  const filteredMessages = messages.filter((msg) =>
    msg.recipient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="form-card">
      <h3>Message Log</h3>
      <input
        type="text"
        placeholder="Search by recipient"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {filteredMessages.map((msg, idx) => (
            <tr key={idx}>
              <td>{msg.recipient}</td>
              <td>{msg.message}</td>
              <td>{msg.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageLog;
