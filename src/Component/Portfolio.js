import React from 'react'
import  graphimg from '../asset/img/graph.png'
import '../asset/css/portfolio.css'
import {ResponsiveContainerProps,LineChart,Line, ResponsiveContainer,XAxis,YAxis,Legend,Tooltip} from 'recharts'
// import { CartesianGrid } from 'recharts'
 
export default function Portfolio() {
  const pdata=[
    {
      language:'python',
      student:13,
      fees:10
    },
    {
      language:'javascript',
      student:17,
      fees:20
    },
    {
      language:'HTML',
      student:28,
      fees:30
    },
    {
      language:'Css',
      student:20,
      fees:20
    },
    {
      language:'react',
      student:120,
      fees:30
    },
    {
      language:'Angular',
      student:102,
      fees:30
    },
  ]
  
  return (
   <>
   <div className='container-fluid mt-3'>
    <p className='m-0'>Portfolio</p>
    <div className='portfolio-content'>
       <div className='portfoliodata ps-4'>
        <h1>$ 17,643.41</h1>
        <p>Portfolio Balance</p>
       </div>
       <div className='portfolio-container'>
       <ResponsiveContainer width='100%' aspect={3}>
         <LineChart data={pdata} height={600} width={300} margin={{top:0,right:0,left:0,bottom:0}}>
        {/* <CartesianGrid strokeDasharray="3 3"/> */}
        {/* <Legend/> */}
        <Tooltip itemStyle={{color:"white"}}  contentStyle={{backgroundColor:"#BCF67E",border:"none"}}/>
            <Line  dataKey="student" stroke='#BCF67E' activeDot={{r:8}}></Line>
            {/* <Line dataKey="fees"></Line> */}
         </LineChart>
       </ResponsiveContainer>
       </div>
       <div className='Portfolio-year d-flex ps-4'>
         <p>1h</p>
         <p>24h</p>
         <p>1W</p>
         <p>1M</p>
         <p>1Y</p>
         <p>All</p>
       </div>
    </div>
   </div>
   </>
  )
}
