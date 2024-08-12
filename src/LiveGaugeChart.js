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
      <div style={{ position: 'absolute', top: '26%', left: '36%', transform: 'translate(-50%, -50%)', color: '#E4080A' }}>
        <span color= '#E4080A'><b>Concentrada</b></span>
      </div>
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', color: '#7DDA58' }}>
        <span><b>Igualitária</b></span>
      </div>
      <div style={{ position: 'absolute', top: '26%', left: '63%', transform: 'translate(-50%, -50%)', color: '#5DE2E7' }}>
        <span><b>Moderada</b></span>
      </div>
      <GaugeChart
        id="gauge-chart1"
        style={chartStyle}
        //nrOfLevels={30}
        //arcWidth={0.3}
        arcsLength={[0.1, 0.1, 0.1, 0.4, 0.3]}
        //colors={["#FF5F6D", "#FFB200", "#F2FF00", "#00FFDD", "#00FF00"]}
        colors={["#E4080A", "#FF9101", "#FFDE59", "#7DDA58", "#5DE2E7"]}
        labels={
          [
            {
              name: 'Too Slow',
              labelColor: '#E4080A',
              activeBarColor: '#E4080A',
            },
            {
              name: 'Very Slow',
              labelColor: '#FF9101',
              activeBarColor: '#FF9101',
            },
            {
              name: 'Slow',
              labelColor: '#FFDE59',
              activeBarColor: '#FFDE59',
            },
            {
              name: 'Normal',
              labelColor: '#7DDA58',
              activeBarColor: '#7DDA58',
            },
            {
              name: 'Fast',
              labelColor: '#5DE2E7',
              activeBarColor: '#5DE2E7',
            }
          ]       
        }
        percent={value}
        arcPadding={0.00}
        textColor="#000000"
        formatTextValue={(value) => `${value.toFixed(1)}%`}
      />

    </div>
  );
};

export default LiveGaugeChart;
