import React from 'react'
import {PieChart, Pie,Tooltip, ResponsiveContainer}  from 'recharts';

export default function Char1() {
  const data = [
    {name: "PLUG", value: 400, fill:"blue"},
    {name: "PNS", value: 300 ,fill:"orange"},
    {name: "AG", value: 500, fill:"green"},
    {name: "AMC", value: 150, fill:"red"},

  ];
  
  
  return (
    
 
        
        
        <PieChart width={400} height={260} >
        <Pie
        dataKey="value"
        isAnimationActive="false"
        data={data}
        cx={220}
        cy={140}
        outerRadius={90}
        fill = "#125586"
       label={(entry) => entry.name + " " + entry.value}
       
        
        
        />

        
        <Tooltip/>

      </PieChart>
        

  

   
    
  )
}
