class Teste {
    constructor() {
      // Verifica se o objeto process está definido ou não
      if (typeof window === 'undefined') {
        // Se for undefined, está rodando no lado cliente
        console.log('#### Teste está rodando no lado servidor ####');
      } else {
        // Se não for undefined, está rodando no lado servidor
        console.log('*** Teste está rodando no lado cliente');
      }
    }
  }
  module.exports = Teste;

  /**
   * 
const participants = [
  { id: 1, name: 'Participante 1', progress: 0 },
  { id: 2, name: 'Participante 2', progress: 0 },
  // Adicione mais participantes conforme necessário
];

const App = () => {
  const [participantsProgress, setParticipantsProgress] = useState(participants);

  useEffect(() => {
    const interval = setInterval(() => {
      // Atualiza o progresso de cada participante a cada 1000 milissegundos (1 segundo)
      setParticipantsProgress((prevParticipants) =>
        prevParticipants.map((participant) => ({
          ...participant,
          progress: participant.progress < 100 ? participant.progress + 10 : 100,
        }))
      );
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []); // O array vazio assegura que o efeito só é executado uma vez, semelhante ao componentDidMount

  return (
    <div>
      {participantsProgress.map((participant) => (
        <div key={participant.id}>
          <h3>{participant.name}</h3>
          <ProgressBar completed={participant.progress} />
        </div>
      ))}
    </div>
  );
};

   * 
   */