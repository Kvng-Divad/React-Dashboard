import "./card.css"

import React, { useState } from 'react'
import {motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import Chart from "react-apexcharts";
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from "@iconscout/react-unicons";

const Card = (props) => {

    const [expanded, setExpanded] = useState(false)

  return(
    <AnimateSharedLayout>
        {
        expanded? (
            <ExpandedCard param = {props} setExpanded={() =>setExpanded(false)}/>
        ):
        <CompactCard param = {props} setExpanded={() =>setExpanded(true)}/>
    }
    </AnimateSharedLayout>
  )

}

function CompactCard ({param, setExpanded}){
    const Png = param.icon;
    
    return(
        <motion.div className="compactcard" 
        style={{
            background: param.color.background,
            boxShadow : param.color.boxshadow,
        }}
        layoutId='expandableCard'
        onClick = {setExpanded}
        >
            
            <div className="radialbar">
                
            <CircularProgressbar 
             value={param.barValue}
             text={`${param.barValue}%`} 
             />
            <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 Hours </span>
            </div>
            
        </motion.div>
    )

}


function ExpandedCard ({param, setExpanded}){

    const data = {
        options:{
            chart: {
                type: "area",
                height: "auto",
              },
        
              dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
              },
        
              fill: {
                colors: ["#fff"],
                type: "gradient",
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: "smooth",
                colors: ["white"],
              },
              tooltip: {
                x: {
                  format: "dd/MM/yy HH:mm",
                },
              },
              grid: {
                show: true,
              },
              xaxis: {
                type: "datetime",
                categories: [
                  "2022-06-19T00:00:00.000Z",
                  "2022-06-19T01:30:00.000Z",
                  "2022-06-19T02:30:00.000Z",
                  "2022-06-19T03:30:00.000Z",
                  "2022-06-19T04:30:00.000Z",
                  "2022-06-19T05:30:00.000Z",
                  "2022-06-19T06:30:00.000Z",
                  "2022-06-19T07:30:00.000Z",
                ],
              },
            },
    };
        
    
    

    return(
        <motion.div className="expandedcard" 
        style={{
            background: param.color.background,
            boxShadow : param.color.boxshadow,
        }}
        layoutId='expandableCard'
        >
            <div  style={{alignSelf:'flex-end', cursor: 'pointer'}}>
                <UilTimes 
                onClick = {setExpanded}
               />
            </div>

            <span>{param.title}</span>
            
            <div className="chartcontainer">
                <Chart series={param.series} type="area" options={data.options}/>
            </div>

            <span>Last 24 Hours</span>
            
        </motion.div>
    )
}

export default Card;