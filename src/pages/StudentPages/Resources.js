import React, { useState } from "react";
import "../../styles/Student/Resources.css";
// external coral-themed stylesheet

const Resources = () => {
  const demoResources = [
    {
      id: "res001",
      title: "Photosynthesis - Intro Notes",
      subject: "Biology",
      uploadedBy: "Mrs. Sharma",
      fileUrl: "/demo-files/photosynthesis.pdf",
      uploadDate: "2025-06-12"
    },
    {
      id: "res002",
      title: "Algebra Basics Worksheet",
      subject: "Math",
      uploadedBy: "Mr. Mehra",
      fileUrl: "/demo-files/algebra-worksheet.pdf",
      uploadDate: "2025-06-10"
    },
    {
      id: "res003",
      title: "Newton's Laws Summary",
      subject: "Physics",
      uploadedBy: "Ms. Rao",
      fileUrl: "/demo-files/newton-laws.pdf",
      uploadDate: "2025-06-11"
    }
  ];

  const [selectedSubject, setSelectedSubject] = useState("All");

  const filteredResources =
    selectedSubject === "All"
      ? demoResources
      : demoResources.filter((res) => res.subject === selectedSubject);

  return (
    <div className="resources-container">
      <h2 className="resources-heading">Study Resources</h2>

      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        className="subject-dropdown"
      >
        <option value="All">All Subjects</option>
        <option value="Biology">Biology</option>
        <option value="Math">Math</option>
        <option value="Physics">Physics</option>
      </select>

      {filteredResources.map((res) => (
        <div className="resource-card" key={res.id}>
          <h3 className="resource-title">{res.title}</h3>
          <p><strong>Subject:</strong> {res.subject}</p>
          <p><strong>Uploaded By:</strong> {res.uploadedBy}</p>
          <p><strong>Date:</strong> {res.uploadDate}</p>
          <a
            href={res.fileUrl}
            download
            className="download-btn"
          >
            Download Resource
          </a>
        </div>
      ))}
    </div>
  );
};

export default Resources;
