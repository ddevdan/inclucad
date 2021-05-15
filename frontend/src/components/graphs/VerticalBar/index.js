import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "../../Chart";

const dataConfig = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  labels: [
    "AUDITIVA",
    "FÍSICA",
    "INTELECTUAL",
    "MULTIPLAS DEFICIÊNCIAS",
    "OSTOMIA",
    "VISUAL",
  ],
  datasets: [
    {
      label: "PESSOAS",
      data: [],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',

  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
};

const VerticalBar = ({data, currentCity}) => {
  let config = dataConfig;
  config.datasets[0].data = data;
  console.log(config.datasets[0].data, "OLA")
  return (
    <Chart data={data} title={`Quantidade de PCD por tipo de deficiência em ${currentCity && currentCity.charAt(0).toUpperCase() + currentCity.slice(1)}`}>

      <Bar data={config} height="250" options={options} />
    </Chart>
  );
};

export default VerticalBar;
