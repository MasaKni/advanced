import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './Style.css'

const GoalsChart = (props) => {
    const { data } = props
    return (
        <div className='chart'>
            <h1>Preferred Foot Chart</h1>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="goals"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default GoalsChart