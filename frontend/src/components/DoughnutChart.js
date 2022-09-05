import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Box, Typography } from "@mui/material";

function DoughnutChart({ values }) {
  const data = {
    labels: values.map((d)=>d.name),
    datasets: [
      {
        label: "# of Votes",
        data: values.map((d)=>d.records),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(55, 15, 64, 0.5)",
          "rgba(5, 159, 64, 0.5)",
          "rgba(255, 19, 64, 0.5)",
          "rgba(65, 159, 200, 0.5)",
          "rgba(115, 59, 100, 0.5)",
        ]
      },
    ],
  };
  return (
    <Box sx={{ width: "400px", m: 0, p: 0 }}>
      <Typography textAlign='center' variant='h6' color='primary'>Species</Typography>
      <Doughnut data={data} />
    </Box>
  );
}

export default DoughnutChart;
