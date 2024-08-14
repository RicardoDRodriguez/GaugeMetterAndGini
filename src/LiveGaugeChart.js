import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";

const DataBase = require('./DataBase')
const database = new DataBase()

const chartStyle = {
  height: 10
};


const LiveGaugeChart = () => {
  const [value, setValue] = useState(0.0); // Initial value

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(async () => {
      let newValue = 0

      newValue = await database.calcularGini();
      console.log("***** New Value: *****", newValue)

      if (newValue < 0) {
        newValue = 0;
      } else if (newValue > 1) {
        newValue = 1
      }


      setValue(newValue);

    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div style={{ position: 'absolute', top: '15.5%', left: '41%', transform: 'translate(-50%, -50%)', color: '#E4080A' }}>
        <span color= '#E4080A'><b>CONCENTRADA</b></span>
      </div>
      <div style={{ position: 'absolute', top: '5.5%', left: '50%', transform: 'translate(-50%, -50%)', color: '#7DDA58' }}>
        <span><b>MODERADA</b></span>
      </div>
      <div style={{ position: 'absolute', top: '15.5%', left: '65%', transform: 'translate(-50%, -50%)', color: '#5DE2E7' }}>
        <span><b>IGUALITÁRIA</b></span>
      </div>
      <GaugeChart
        id="gauge-chart1"
        style={chartStyle}
        arcsLength={[0.1, 0.1, 0.1, 0.4, 0.3]}
        colors={["#E4080A", "#FF9101", "#FFDE59", "#7DDA58", "#5DE2E7"]}
        percent={value}
        arcPadding={0.00}
        textColor="#000000"
        formatTextValue={(value) => `${value.toFixed(1)}%`}
      />

    </div>
  );
};

export default LiveGaugeChart;
