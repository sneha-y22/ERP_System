import React from "react";
import "../../styles/Student/PerformanceAnalytics.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


const PerformanceAnalytics = () => {
  const performance = {
    attendance: 84,
    assignments: 92,
    averageGrade: 88,
    participation: 70
  };

  const barData = {
  labels: ["Attendance", "Assignments", "Grades", "Participation"],
  datasets: [
    {
      label: "Performance (%)",
      data: [
        performance.attendance,
        performance.assignments,
        performance.averageGrade,
        performance.participation
      ],
      backgroundColor: "#ff7f50",
      borderRadius: 6
    }
  ]
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: { stepSize: 20 }
    }
  }
};

  const getStatusColor = (value) => {
    if (value >= 85) return "good";
    if (value >= 60) return "average";
    return "poor";
  };

  return (
    <div className="performance-wrapper">
      <h2 className="performance-title">📈 Performance Summary</h2>

      <div className="performance-grid">
        {Object.entries(performance).map(([key, value]) => (
          <div key={key} className={`performance-card ${getStatusColor(value)}`}>
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            <p>{value}%</p>
          </div>
        ))}
      </div>

      <div className="chart-container">
  <Bar data={barData} options={barOptions} />
</div>

    </div>
  );
};

export default PerformanceAnalytics;
