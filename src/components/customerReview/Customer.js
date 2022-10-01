import "./Customer.css"

import React from 'react'
import Chart from "react-apexcharts"

const Customer = () => {
    const data = {
        series:[
            {
            name: "Review",
            data:[10, 70 , 30, 40, 67, 38, 85, 100],
            }
        ],
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
                colors: ["524f4f"],
                type: "gradient",
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: "smooth",
                colors: ["red"],
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

  return (

    <div className="Customer-review">
        <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default Customer