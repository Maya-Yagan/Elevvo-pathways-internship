import React from 'react'
import { Bar } from 'react-chartjs-2'
import '../utils/chartConfig'

const data = {
  labels: ['Apr','May','Jun','Jul','Aug','Sep','Oct'],
  datasets: [
    {
      label: 'Earnings',
      data: [1200, 1500, 900, 2000, 1800, 2400, 4200],
      borderRadius: 6,
      barThickness: 18,
    }
  ]
}

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    y: { beginAtZero: true, ticks: { stepSize: 500 } }
  }
}

export default function EarningsChart(){
  return <Bar data={data} options={options} />
}