import retro from "../../assets/img/entertainment/retro.jpg";
import pokemon from "../../assets/img/entertainment/pokemon.jpg";
import rpg from "../../assets/img/entertainment/rpg.jpg";
import off from "../../assets/img/entertainment/off.jpg";

const entertainmentContent = [
  {
    title: "Laboratório de Jogos Antigos / Emulador de Jogos",
    image: retro,
    date: "09/05/2026",
    time: "08:30 - 12:00",
    location: "IFSul - Passo Fundo",
    description:
      "Uma jornada pelas gerações clássicas de consoles de videogames, com curiosidades técnicas e exploração de jogos marcantes de cada época.",
  },
  {
    title: "Aprenda a jogar cartas: Pokemón e Digimon",
    image: pokemon,
    date: "09/05/2026",
    time: "08:30 - 12:00",
    location: "IFSul - Passo Fundo",
    description:
      "A atividade consiste em duas oficinas práticas simultâneas de introdução aos jogos de cartas colecionáveis Pokémon e Digimon, organizadas em três sessões sequenciais. Em cada sessão, os participantes aprenderão como funcionam os jogos, suas regras básicas e formas de jogar e colecionar. É indicada para crianças, jovens, adultos e pessoas interessadas em jogos de estratégia, cultura geek, aprendizagem lúdica e experiências longe das telas.",
  },
  {
    title: "Mesa de RPG: A arma secreta de Wensan Whitebrows (A Origem)",
    image: rpg,
    date: "09/05/2026",
    time: "08:30 - 11:00",
    location: "Sala 311",
    rules: [
      {
        header: "Nome da mesa",
        content: ["A arma secreta de Wensan Whitebrows - A Origem"],
      },
      {
        header: "Sistema",
        content: ["Old Dragon 2"],
      },
      {
        header: "Mestre",
        content: ["José de Figueiredo"],
      },
      {
        header: "Vagas",
        content: ["5"],
      },
      {
        header: "Resumo",
        content: [
          "O Duque Wensan Whitebrow contrata profissionais para uma missão de busca e extração de um artefato mágico necessário para a defesa do reino.",
        ],
      },
    ],
  },
  {
    title: "Sala de Jogos de Tabuleiro (Espaço Off)",
    image: off,
    date: "09/05/2026",
    time: "08:30 - 12:00",
    location: "IFSul - Passo Fundo",
    description:
      "O Espaço Off traz uma sala dedicada aos jogos de tabuleiro modernos e clássicos. Um ambiente descontraído para quem quer se divertir fora das telas, com jogos para todos os perfis.",
  },
];

export default entertainmentContent;
