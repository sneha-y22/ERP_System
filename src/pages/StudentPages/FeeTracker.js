import React from "react";
import "../../styles/Student/FeeTracker.css";

const feeData = [
  { quarter: "Q1 (Jan - Mar)", status: "Paid", dueDate: "2025-03-31" },
  { quarter: "Q2 (Apr - Jun)", status: "Paid", dueDate: "2025-06-30" },
  { quarter: "Q3 (Jul - Sep)", status: "Pending", dueDate: "2025-09-30" },
  { quarter: "Q4 (Oct - Dec)", status: "Pending", dueDate: "2025-12-31" }
];

const FeeTracker = () => {
  return (
    <div className="fee-tracker-container">
      <h2>💰 Fee Tracker</h2>
      <p className="fee-subtext">Track your quarterly fee status below</p>

      <div className="fee-grid">
        {feeData.map((fee, index) => (
          <div key={index} className={`fee-card ${fee.status.toLowerCase()}`}>
            <h3>{fee.quarter}</h3>
            <p><strong>Status:</strong> {fee.status}</p>
            <p><strong>Due Date:</strong> {fee.dueDate}</p>
            {fee.status === "Pending" && (
              <button
                className="pay-button"
                onClick={() => window.open("https://yourbankapp.com/pay", "_blank")}
              >
                Pay Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeTracker;
