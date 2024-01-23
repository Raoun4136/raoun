import React from 'react';
import {
  LineChart,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

export const RechartsPie = () => {
  const data = [
    { name: 'Page 1', uv: Math.random(), pv: Math.random(), amt: Math.random() },
    { name: 'Page 2', uv: Math.random(), pv: Math.random(), amt: Math.random() },
    { name: 'Page 3', uv: Math.random(), pv: Math.random(), amt: Math.random() },
    { name: 'Page 4', uv: Math.random(), pv: Math.random(), amt: Math.random() },
    { name: 'Page 5', uv: Math.random(), pv: Math.random(), amt: Math.random() },
    { name: 'Page 6', uv: Math.random(), pv: Math.random(), amt: Math.random() },
    { name: 'Page 7', uv: Math.random(), pv: Math.random(), amt: Math.random() },
    { name: 'Page 8', uv: Math.random(), pv: Math.random(), amt: Math.random() },
    { name: 'Page 9', uv: Math.random(), pv: Math.random(), amt: Math.random() },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" style={{ fontFamily: 'Pretendard' }} />
        <YAxis style={{ fontFamily: 'Pretendard' }} />
        <Tooltip itemStyle={{ fontFamily: 'Pretendard' }} />
        <Legend
          style={{ fontFamily: 'Pretendard' }}
          onClick={() => {
            console.log('sdsad');
          }}
          onMouseUp={(e) => {
            console.log(e);
          }}
        />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#b0b2b8"
          fill="#b0b2b8"
          fillOpacity={0.3}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
