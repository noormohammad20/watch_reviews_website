import React, { useEffect, useState } from 'react'
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts'
import './Dashboard.css'
const Dashboard = () => {
    const [chart, setChart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <section>
            <h2>Line Chart</h2>
            <LineChart width={300} height={300} data={chart}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'revenue'}></Line>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis dataKey={'sell'}></YAxis>

                <Tooltip></Tooltip>
            </LineChart>
            <h2>Pie Chart</h2>
            <PieChart width={500} height={400}>
                <Pie data={chart} dataKey={'investment'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" ></Pie>
                <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label ></Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </section>
    )
}

export default Dashboard