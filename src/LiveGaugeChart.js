import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import DataBase from "./DataBase";

const chartStyle = {
  height: 50
};

const LiveGaugeChart = () => {
  const [value, setValue] = useState(0.0); // Initial value

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      let newValue = 0
      try { 
          console.log("Entrei em userEffect")
          newValue = DataBase.calcularGini(); // Gera o valor de gini entre  0 e 1          
      } catch (error) {
          newValue=0
          console.error('Erro ao calcular o fator GINI', error);
      }
      console.log("New Valuw: ",newValue)
      if (newValue < 0) {
        newValue =0;
      } else if (newValue > 1){
        newValue = 1
      }

      setValue(newValue);
      
    }, 3000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (   
    <div>
      <GaugeChart
        id="gauge-chart1"
        style={chartStyle}
        nrOfLevels={30}
        arcWidth={0.3} 
        // arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
        colors={["#FF5F6D", "#FFB200", "#F2FF00", "#00FFDD", "#00FF00"]}
        labels={["Pouco dialogico","","","","Muito Dialogico"]}
        percent={value}
        arcPadding={0.02}
        textColor="black"
        formatTextValue={(value) => `${value.toFixed(2)}%`}
      /> 
   </div>
   
  );
};

export default LiveGaugeChart;
