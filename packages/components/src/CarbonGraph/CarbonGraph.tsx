import React from 'react';
import { StackedBarChart } from '@carbon/charts-react';
import { StackedAreaChartOptions } from '@carbon/charts';

export const CarbonGraph = () => {
  const stackedBarData = [
    {
      group: 'Dataset 1',
      value: 0,
    },
    {
      group: 'Dataset 1',
      value: -37312,
    },
    {
      group: 'Dataset 1',
      value: -22392,
    },
    {
      group: 'Dataset 1',
      value: -52576,
    },
    {
      group: 'Dataset 1',
      value: 20135,
    },
    {
      group: 'Dataset 2',
      value: 47263,
    },
    {
      group: 'Dataset 2',
      value: 14178,
    },
    {
      group: 'Dataset 2',
      value: 23094,
    },
    {
      group: 'Dataset 2',
      value: 45281,
    },
    {
      group: 'Dataset 2',
      value: -63954,
    },
  ];

  const stackedBarOptions: StackedAreaChartOptions = {
    title: 'Area (time series - natural curve)',
    axes: {
      bottom: {
        title: '2019 Annual Sales Figures',
        // scaleType: ScaleTypes.LABELS,
      },
      left: {
        mapsTo: 'value',
      },
    },
    curve: 'curveNatural',
    height: '700px',
  };

  return (
    <div style={{ width: '100%' }} className="App">
      <StackedBarChart data={stackedBarData} options={stackedBarOptions} />
    </div>
  );
};
