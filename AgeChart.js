import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { filterPlayerOnAge } from './handleData.js'
import './Style.css'

const AgeChart = (props) => {
    const {data}  = props
    //console.log('hey' +[{'preferred_foot':data[0].preferred_foot, 'player_çount': data[0].player_count},  
                    //    {'preferred_foot':data[1].preferred_foot, 'player_count':data[0].player_count}])
                    //console.log('hey'+ data[0].preferred_foot +data[0].player_count)
    //console.log('left:'+ data.left)               
    return (
        <div className='chart'>
            <h1>Age Chart</h1>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="player_count"
                    nameKey= "age"
                    isAnimationActive={false}
                    data ={data}
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

export default  AgeChart  
