// AvatarProgress.js
import React, { useState, useEffect  } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const DataBase = require('./DataBase')
const database = new DataBase()

let participants = await database.getParticipantes()
/*
[
    { id: 1, name: 'Participante 1', progress: 30 },
    { id: 2, name: 'Participante 2', progress: 49},
    // Adicione mais participantes conforme necessário
  ]
*/
const AvatarProgress = () => {
   const [participantsProgress, setParticipantsProgress] = useState(participants);

  useEffect(() => {
    const interval = setInterval(() => {
      participants = database.getParticipantes()
      // Atualiza o progresso de cada participante a cada 2000 milissegundos (2 segundo)
      setParticipantsProgress((prevParticipants) =>
        prevParticipants.map((participant) => ({
          ...participant,
          percentualAcumuloFala: participant.percentualAcumuloFala < 100 ? participant.percentualAcumuloFala  : 100,
        }))
      );
    }, 2000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []); // O array vazio assegura que o efeito só é executado uma vez, semelhante ao componentDidMount

  return (
    <div>
      {participantsProgress.map((participant) => (
        <div key={participant.id}>
          <h3>{participant.nome}</h3>
          <ProgressBar completed={participant.percentualAcumuloFala.toFixed(0)}
                       customLabel= {`${participant.percentualAcumuloFala.toFixed(0)}%`} />
        </div>
      ))}
    </div>
  );
};

export default AvatarProgress;