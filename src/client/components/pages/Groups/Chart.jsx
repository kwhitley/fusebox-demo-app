import React from 'react'
import { ResponsiveContainer, CartesianGrid, YAxis, LineChart, Line, ReferenceLine, Tooltip, XAxis, Legend } from 'recharts'
import moment from 'moment'

const Chart = ({ values, min, max, highvalue, lowValue, targetValue }) => {
  return (
    <ResponsiveContainer height={200}>
      <LineChart data={values} width={300} height={100}>
        <XAxis dataKey="date" tickFormatter={ts => moment(ts).format('HH:mm:ss')} />
        <YAxis />
        <Tooltip/>
        <Legend />
        <CartesianGrid strokeDasharray="3 3"/>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}


export default Chart
