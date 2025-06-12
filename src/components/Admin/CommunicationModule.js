// src/components/Admin/CommunicationModule.js
import React, { useState } from "react";
import CommunicationForm from "./CommunicationForm";
import MessageLog from "./MessageLog";

const CommunicationModule = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSend = (msg) => {
    setMessages([msg, ...messages]);
  };

  return (
    <>
      <CommunicationForm onSend={handleSend} />
      <MessageLog
        messages={messages}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
};

export default CommunicationModule;
