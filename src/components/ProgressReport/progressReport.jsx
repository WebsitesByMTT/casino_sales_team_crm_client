import React, { useEffect, useState } from 'react';
import './progressReport.css'
import {  Line } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale)

const ProgressReports = ({data ,xAxis, yAxis}) => {

  const [reportData, setReportData] = useState(null)
 
  console.log("projectReport", data,xAxis,yAxis)

  useEffect(() => {
    if (data) {
      const labelsData = data?.map(items => items[xAxis] || 0);
      const graphData = data?.map(items => items[yAxis[0]] || 0);

      console.log("labels","graphDat",labelsData,graphData)
      setReportData({
        labels: labelsData || [],
        datasets: [{
          label: "User",
          data: graphData || [],
          borderColor: "yellow",
          borderWidth: 2,
        }],
      });
    }
  }, [data])

  return (
    <div className='projectContainerGraph'>
      <div className='header'>
        <h1 className='title'>Progress</h1>
      </div>
   
      <div className='graph'>
        {reportData && <Line options={{ maintainAspectRatio: false }} data={reportData} />}

      </div>
    </div>
  );
};

export default ProgressReports;

