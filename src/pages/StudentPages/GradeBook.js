import React from "react";
import "../../styles/Student/GradeBook.css";

const gradeData = [
  {
    subject: "Physics",
    internal: {
      project: 18,
      performance: 16,
      practical: 19
    },
    external: {
      unitTest: 14,
      finalExam: 42
    }
  },
  {
    subject: "Chemistry",
    internal: {
      project: 17,
      performance: 15,
      practical: 18
    },
    external: {
      unitTest: 13,
      finalExam: 40
    }
  },
  {
    subject: "Mathematics",
    internal: {
      project: 20,
      performance: 18,
      practical: 17
    },
    external: {
      unitTest: 15,
      finalExam: 45
    }
  }
];

const GradeBook = () => {
  return (
    <div className="gradebook-container">
      <h2>📚 Grade Book</h2>
      <p className="gradebook-subtext">Your subject-wise internal and external scores</p>

      <div className="gradebook-table-wrapper">
        <table className="gradebook-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Project</th>
              <th>Performance</th>
              <th>Practical</th>
              <th>Unit Test</th>
              <th>Final Exam</th>
              <th>Total</th>
              <th>Report Sheet</th>
            </tr>
          </thead>
          <tbody>
            {gradeData.map((item, index) => {
              const total =
                item.internal.project +
                item.internal.performance +
                item.internal.practical +
                item.external.unitTest +
                item.external.finalExam;

              return (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.internal.project}</td>
                  <td>{item.internal.performance}</td>
                  <td>{item.internal.practical}</td>
                  <td>{item.external.unitTest}</td>
                  <td>{item.external.finalExam}</td>
                  <td><strong>{total}</strong></td>
                  <td className="report-download-placeholder">—</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button
        className="download-all-btn"
        onClick={() => alert("Report sheet download will be available once uploaded.")}
      >
        Download Report Sheet
      </button>
    </div>
  );
};

export default GradeBook;
