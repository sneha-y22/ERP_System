import React, { useState } from "react";
import "../../styles/Student/DiscussionBoard.css";
const getTimeNow = () => new Date().toLocaleString();
const discussionTopics = {
  Math: ["Should we rely more on calculators in exams?", "Is geometry still relevant today?"],
  Science: ["How will AI impact future scientific research?", "Should experiments be virtual or physical?"],
  English: ["Is grammar as important as creativity?", "Can reading fiction improve empathy?"]
};

const DiscussionBoard = () => {
  const [selectedSubject, setSelectedSubject] = useState("Math");
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState(() => {
  const saved = localStorage.getItem("discussionReplies");
  return saved ? JSON.parse(saved) : {};
});

  const handleReplySubmit = (topic) => {
  if (!replyText.trim()) return;
  const newReply = { message: replyText.trim(), time: getTimeNow() };
  const updated = { ...replies };
  if (!updated[topic]) updated[topic] = [];
  updated[topic].push(newReply);
  setReplies(updated);
  localStorage.setItem("discussionReplies", JSON.stringify(updated));
  setReplyText("");
};

  return (
    <div className="discussion-wrapper">
      <h2 className="discussion-title">💬 Discussion Board</h2>

      <div className="subject-selector">
        <label>Select Subject:</label>
        <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
          {Object.keys(discussionTopics).map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </div>

      <div className="discussion-topics">
        {discussionTopics[selectedSubject].map((topic, idx) => (
          <div key={idx} className="discussion-card">
            <h3>{topic}</h3>

            {replies[topic] && (
  <ul className="replies-list">
    {replies[topic].map((reply, i) => (
      <li key={i}>
        <p>{reply.message}</p>
        <span className="timestamp">{reply.time}</span>
      </li>
    ))}
  </ul>
)}

            <textarea
              placeholder="Write your view..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button className="submit-btn" onClick={() => handleReplySubmit(topic)}>
              Submit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionBoard;
