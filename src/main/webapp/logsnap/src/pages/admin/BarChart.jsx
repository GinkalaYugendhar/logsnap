import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Letters Generated',
        data: [0, 271, 0],
        backgroundColor: ['#e0e0e0', '#4caf50', '#e0e0e0'],
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;
