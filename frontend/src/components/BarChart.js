import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import { Box, Typography } from '@mui/material';

function BarChart({values}) {


    const val = {
        labels: values.map((d)=>d.name),
        datasets: [
          {
            label: 'Number of Species',
            data: values.map((d)=>d.records),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor:'rgba(255, 99, 132, 0.5)'
          },
        ],
      };
  return (
  <Box sx={{width:'500px'}}>
<Typography textAlign='center' variant='h6'  color='primary'>Orders</Typography>
<Bar
  data={val}
/>
  </Box> 
  )
}

export default BarChart