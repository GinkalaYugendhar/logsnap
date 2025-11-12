import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['5', '10', '15', '20', '25', '30'],
    datasets: [
      {
        label: 'Last month',
        data: [10, 20, 15, 18, 22, 14],
        borderColor: '#42a5f5',
        fill: false,
      },
      {
        label: 'Current month',
        data: [12, 18, 17, 19, 21, 16],
        borderColor: '#66bb6a',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
