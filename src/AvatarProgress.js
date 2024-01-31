// AvatarProgress.js
import React, { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

//const AvatarProgress = ({ data }) => {

const AvatarProgress = () => {
    // Estados para controlar o progresso de cada barra
    const numBars =5;

    // Vetor de estados para controlar o progresso de cada barra
    const [progressBars, setProgressBars] = useState(Array(numBars).fill(0));

    // Função para atualizar o progresso de uma barra específica
    const updateProgress = (index) => {
        setProgressBars((prevProgressBars) => {
            const newProgressBars = [...prevProgressBars];
            newProgressBars[index] = newProgressBars[index] < 100 ? newProgressBars[index] + 10 : 100;
            return newProgressBars;
        });
    };

    return (
        <div>
            {/* Mapeando o vetor de barras de progresso */}
            {progressBars.map((progress, index) => (
                <div key={index}>
                    {/* Cada barra de progresso */} 
                    <ProgressBar completed={progress} />
                <p>&nbsp;</p>    
                </div>
            ))}
        </div>
    );
};

export default AvatarProgress;