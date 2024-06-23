import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AnomalyPieChart = () => {
  // Dummy data for the pie chart
  const data = {
    labels: ['Permission Anomalies', 'Risk Tier Anomalies', 'PBL Anomalies'],
    datasets: [{
      label: 'Anomaly Types',
      data: [30, 50, 20], // Dummy percentages
      backgroundColor: [
        '#FF6384', // Permission Anomalies color
        '#36A2EB', // Risk Tier Anomalies color
        '#FFCE56'  // PBL Anomalies color
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };

  return (
    <div className=" max-w-lg">
      <Pie data={data} />
    </div>
  );
};

export default AnomalyPieChart;
