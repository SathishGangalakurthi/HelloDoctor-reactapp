import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 25, label: 'Protien' },
  { id: 1, value: 10, label: 'Fats' },
  { id: 2, value: 30, label: 'Carbs' },
  { id: 3, value: 15, label: 'Fruits' },
  { id: 4, value: 20, label: 'Vegetables' },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -40, color: 'gray' },
        },
      ]}
      height={250}
      width={420}
    />
  );
}
