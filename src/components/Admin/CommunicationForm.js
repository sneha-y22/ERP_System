import React, { useState } from "react";

const CommunicationForm = ({ onSend }) => {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!recipient || !message) return;
    onSend({ recipient, message, timestamp: new Date().toLocaleString() });
    setRecipient("");
    setMessage("");
  };

  return (
    <div className="form-card communication-form">
      <h3>Send Message</h3>
      <input
        type="text"
        placeholder="Recipient (e.g., All, Student Name)"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default CommunicationForm;
