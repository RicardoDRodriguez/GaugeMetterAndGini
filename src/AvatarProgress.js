// AvatarProgress.js
import React, { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const DataBase = require('./DataBase')
const database = new DataBase()

let participants = await database.getParticipantes()

const AvatarProgress = () => {
 
  const [participantsProgress, setParticipantsProgress] = useState(participants);

  useEffect(() => {
    const interval = setInterval(async () => {
      participants =  database.getParticipantes()
      // Atualiza o progresso de cada participante a cada 2000 milissegundos (2 segundo)
      setParticipantsProgress((prevParticipants) =>
        prevParticipants.map((participant) => ({
          ...participant,
          percentualAcumuloFala: participant.percentualAcumuloFala < 0 ? 0 : participant.percentualAcumuloFala
        }))
      );
    }, 3000); // Update every 3 seconds

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []); // O array vazio assegura que o efeito só é executado uma vez, semelhante ao componentDidMount

  return (
    <div>
      {participantsProgress.map((participant) => (
        <div key={participant.id} align="left">
          <span style={{ marginRight: '10px' }}>{participant.nome}</span>
          <ProgressBar completed={participant.percentualAcumuloFala.toFixed(0)}
            customLabel={`${participant.percentualAcumuloFala.toFixed(0)}%`}
            labelAlignment='outside'
            labelColor='black'
            bgColor={"#ef6c00"} />
        </div>
      ))}
    </div>
  );
};

export default AvatarProgress;