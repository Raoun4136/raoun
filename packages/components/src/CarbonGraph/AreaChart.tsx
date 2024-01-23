import React from 'react';
import { AreaChart as CarbonAreaChart } from '@carbon/charts-react';
import { AreaChartOptions } from '@carbon/charts';
import { ScaleTypes, LegendPositions, Alignments } from '@carbon/charts/interfaces';
import { CoreButton } from 'src';

export const AreaChart = () => {
  const data = [
    {
      group: 'Dataset 1',
      date: new Date(2019, 0, 1),
      value: 0,
    },
    {
      group: 'Dataset 1',
      date: new Date(2019, 0, 6),
      value: -37312,
    },
    {
      group: 'Dataset 1',
      date: new Date(2019, 0, 8),
      value: -22392,
    },
    {
      group: 'Dataset 1',
      date: new Date(2019, 0, 15),
      value: -52576,
    },
    {
      group: 'Dataset 1',
      date: new Date(2019, 0, 19),
      value: 20135,
    },
    {
      group: 'Dataset 2',
      date: new Date(2019, 0, 1),
      value: 47263,
    },
    {
      group: 'Dataset 2',
      date: new Date(2019, 0, 5),
      value: 14178,
    },
    {
      group: 'Dataset 2',
      date: new Date(2019, 0, 8),
      value: 23094,
    },
    {
      group: 'Dataset 2',
      date: new Date(2019, 0, 13),
      value: 45281,
    },
    {
      group: 'Dataset 2',
      date: new Date(2019, 0, 19),
      value: -63954,
    },
    {
      group: 'Dataset 3',
      date: new Date(2019, 0, 1),
      value: 23412,
    },
    {
      group: 'Dataset 3',
      date: new Date(2019, 0, 5),
      value: -23412,
    },
    {
      group: 'Dataset 3',
      date: new Date(2019, 0, 13),
      value: -23322,
    },
    {
      group: 'Dataset 3',
      date: new Date(2019, 0, 19),
      value: -27412,
    },
  ];

  const options: AreaChartOptions = {
    title: 'Area (time series - natural curve)',
    axes: {
      bottom: {
        title: '2019 Annual Sales Figures',
        mapsTo: 'date',
        scaleType: ScaleTypes.TIME,
      },
      left: {
        mapsTo: 'value',
        scaleType: ScaleTypes.LINEAR,
      },
    },
    tooltip: {
      customHTML(data, defaultHTML) {
        console.log('data', data);
        console.log('defaultHTML', defaultHTML);
        return `<div>${data[0].value}</div>`;
      },
    },
    color: {
      scale: {
        'Dataset 1': '#ff0000',
        'Dataset 2': '#00ff00',
        'Dataset 3': '#0000ff',
      },
    },
    curve: 'curveNatural',
    height: '400px',
    toolbar: {
      // enabled: false,
    },
    resizable: true,
    grid: {
      x: {
        numberOfTicks: 3,
      },
    },
    legend: {
      position: LegendPositions.TOP,
      additionalItems: [
        {
          type: 'line',
          name: 'Line',
          fill: 'red',
          stroke: 'red',
        },
        {
          type: 'area',
          name: 'area',
          fill: 'blue',
          stroke: 'blue',
        },
        {
          type: 'zoom',
          name: 'zoom',
          fill: 'purple',
          stroke: 'purple',
        },
        {
          type: 'size',
          name: 'size',
          stroke: 'purple',
        },
        {
          type: 'quartile',
          name: 'quartile',
          fill: 'purple',
          stroke: 'purple',
        },
        {
          type: 'checkbox',
          name: 'checkbox',
          fill: 'purple',
          stroke: 'purple',
        },
        {
          type: 'radius',
          name: 'radius',
          fill: 'purple',
          stroke: 'purple',
        },
      ],
      clickable: true,
      alignment: Alignments.CENTER,
      // /**
      //  * the clickability of legend items
      //  */
      // clickable?: boolean;
      // truncation?: TruncationOptions;
      // alignment?: Alignments;
      // order?: string[];
      // /**
      //  * customized legend items
      //  */
      // additionalItems?: LegendItem[];

      //   type: string;
      // name: string;
      // fill?: string;
      // stroke?: string;
    },
  };
  return (
    <div style={{ width: '100%', fontFamily: 'Pretendard !important' }}>
      <CarbonAreaChart data={data} options={options}></CarbonAreaChart>
    </div>
  );
};
