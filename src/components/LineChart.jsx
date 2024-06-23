// src/AnomaliesChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = [
    {
      date: "2023-06-01",
      permissionAnomalies: 5,
      riskTierAnomalies: 3,
      pblAnomalies: 2,
    },
    {
      date: "2023-06-02",
      permissionAnomalies: 6,
      riskTierAnomalies: 2,
      pblAnomalies: 3,
    },
    {
      date: "2023-06-03",
      permissionAnomalies: 5,
      riskTierAnomalies: 3,
      pblAnomalies: 2,
    },
    {
      date: "2023-06-04",
      permissionAnomalies: 6,
      riskTierAnomalies: 2,
      pblAnomalies: 3,
    },
    {
      date: "2023-06-01",
      permissionAnomalies: 5,
      riskTierAnomalies: 3,
      pblAnomalies: 2,
    },
    {
      date: "2023-06-02",
      permissionAnomalies: 6,
      riskTierAnomalies: 2,
      pblAnomalies: 3,
    },
    {
      date: "2023-06-03",
      permissionAnomalies: 5,
      riskTierAnomalies: 3,
      pblAnomalies: 2,
    },
    {
      date: "2023-06-04",
      permissionAnomalies: 6,
      riskTierAnomalies: 2,
      pblAnomalies: 3,
    },

    // Add more data here
  ];

  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: "Permission Anomalies",
        data: data.map((entry) => entry.permissionAnomalies),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Risk Tier Anomalies",
        data: data.map((entry) => entry.riskTierAnomalies),
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
      {
        label: "PBL Anomalies",
        data: data.map((entry) => entry.pblAnomalies),
        borderColor: "rgba(255, 159, 64, 1)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Number of Anomalies",
        },
      },
    },
  };

  return (
    <div className="w-1/2 h-96 p-4 bg-white rounded-lg shadow-md">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
