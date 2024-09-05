import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const uData = [70, 100, 90, 110, 75, 140, 120, 100, 100, 80, 95, 96, 110, 130, 94, 124, 74, 85, 96, 77, 130, 70, 114, 120, 140, 110, 115, 134, 85, 100, 140];
const xLabels = [
  '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
  '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th',
  '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'
];

export default function SimpleAreaChart() {
  return (
    <LineChart
      width={660}
      height={250}
      series={[
        {
          data: uData,
          label: 'Blood Sugar Levels',
          area: true,
          showMark: false,
          color: ' rgb(34, 151, 153)',
          lineColor: ' rgb(34, 151, 153)',
        },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'block', // Hide the default line if necessary
        },
      }}
    />
  );
}
