import grid_cs from "../../assets/img/grids/cs.png";
import grid_lol from "../../assets/img/grids/lol.png";
import grid_valorant from "../../assets/img/grids/valorant.png";
import grid_chess from "../../assets/img/grids/chess.png";
import grid_rocket_league from "../../assets/img/grids/rocket_league.png";

const modalitiesContent = [
  {
    title: "Counter Strike 2",
    image: grid_cs,
    date: "09/05/2026",
    time: "A partir das 08:30",
    location: "IFSul - Passo Fundo",
    description:
      "A competição de Counter-Strike 2 (CS2) que vai testar os limites da mira, da estratégia e do trabalho em equipe. O torneio será dividido em duas fases: uma etapa inicial de qualificatórias online, disputada pela plataforma FACEIT com uso obrigatório de anti-cheat, e a etapa final presencial, no IFSul – Câmpus Passo Fundo, onde as equipes classificadas disputarão o título e a premiação fornecida pelos patrocinadores.",
    rules: [
      {
        header: "Equipes",
        content: [
          "16 equipes participantes",
          "Cada equipe com 5 jogadores previamente inscritos",
        ],
      },
      {
        header: "Formato do Torneio",
        content: [
          "Fase inicial em MD1 (melhor de um)",
          "Fases eliminatórias em MD3 (melhor de três)",
          "Eliminatória simples (sem repescagem)",
        ],
      },
      {
        header: "Mapas e Vetos",
        content: [
          "Map pool: Ancient, Overpass, Dust II, Inferno, Mirage, Nuke e Train",
          "Vetos antes de cada confronto",
          "Definição do lado inicial (CT ou TR) nos vetos",
        ],
      },
      {
        header: "Horário e Organização",
        content: [
          "Início às 9h30",
          "Ordem das partidas definida por sorteio",
          "Atraso superior a 15 minutos resulta em desclassificação por WO",
        ],
      },
      {
        header: "Contas e Plataforma",
        content: [
          "As qualificatórias serão realizadas integralmente pela FACEIT",
          "Cada jogador deve utilizar sua própria conta FACEIT vinculada à Steam",
          "Uso obrigatório de anti-cheat durante a etapa online",
          "A conta será desconectada ao final da partida",
        ],
      },
      {
        header: "Estrutura e Equipamentos",
        content: [
          "Equipamentos fornecidos: computador, monitor, teclado e mouse padrão",
          "Permitido levar periféricos pessoais (headset, mouse, mousepad e teclado)",
          "É fundamental que todos os jogadores leiam o regulamento completo.",
        ],
      },
      {
        header: "Regras de Conduta",
        content: [
          "Proibido uso de programas externos ou modificações (trapaça) — banimento da equipe",
          "Nicknames ofensivos não serão permitidos",
          "Verificar o Steam Guard previamente para evitar atrasos no login",
          "Problemas técnicos devem ser reportados imediatamente",
          "Discussões ou brigas fora do jogo podem resultar em banimento da equipe",
        ],
      },
      {
        header: "Coach",
        content: [
          "Cada time poderá contar com 1 coach previamente inscrito",
          "O coach é o único acompanhante autorizado dentro do laboratório",
          "Demais convidados devem permanecer na área indicada do local",
        ],
      },
    ],
  },
  {
    title: "League of Legends",
    image: grid_lol,
    date: "09/05/2026",
    time: "A partir das 08:30",
    location: "IFSul - Passo Fundo",
    description:
      "League of Legends (LoL) é um MOBA 5v5 da Riot Games em que times escolhem campeões com habilidades únicas e batalham em Summoner's Rift. O objetivo é destruir o Nexus inimigo, controlando rotas, monstros e visão — mesclando mecânica individual e estratégia de equipe.",
    rules: [
      {
        header: "Equipes",
        content: [
          "4 a 6 equipes participantes",
          "Cada equipe com 5 jogadores previamente inscritos",
        ],
      },
      {
        header: "Formato do Torneio",
        content: [
          "Todas as partidas em MD1 (melhor de um)",
          "Eliminatória simples (sem repescagem)",
        ],
      },
      {
        header: "Horário e Organização",
        content: [
          "Início às 9h00",
          "Ordem das partidas definida por sorteio",
          "Atraso superior a 15 minutos resulta em desclassificação por WO",
        ],
      },
      {
        header: "Contas e Plataforma",
        content: [
          "Cada jogador deve utilizar sua própria conta da Riot Games",
          "A conta será desconectada ao final da partida",
        ],
      },
      {
        header: "Estrutura e Equipamentos",
        content: [
          "Partidas nas salas 510 e 511",
          "Equipamentos fornecidos: computador, monitor, teclado e mouse padrão",
          "Permitido levar periféricos pessoais (headset, mouse, mousepad e teclado)",
        ],
      },
      {
        header: "Regras de Conduta",
        content: [
          "Proibido uso de programas externos ou modificações (trapaça) — banimento da equipe",
          "Nicknames ofensivos não serão permitidos",
          "Problemas técnicos devem ser reportados imediatamente",
          "Discussões ou brigas fora do jogo podem resultar em banimento da equipe",
        ],
      },
      {
        header: "Coach",
        content: [
          "Cada time poderá contar com 1 coach previamente inscrito",
          "O coach é o único acompanhante autorizado dentro do laboratório",
          "Demais convidados poderão permanecer na área indicada do local, acompanhando o jogo pelo telão",
        ],
      },
    ],
  },
  {
    title: "Valorant",
    image: grid_valorant,
    date: "09/05/2026",
    time: "A partir das 08:30",
    location: "IFSul - Passo Fundo",
    description:
      "VALORANT é um FPS tático 5v5 da Riot Games que mistura tiro de precisão com habilidades únicas de Agentes. As equipes atacam/defendem plantando ou desarmando a Spike, gerenciam economia e usam utilitários para controlar mapa e ângulos.",
    rules: [
      {
        header: "Equipes",
        content: [
          "4 a 8 equipes participantes",
          "Cada equipe com 5 jogadores previamente inscritos",
        ],
      },
      {
        header: "Formato do Torneio",
        content: [
          "Todas as partidas em MD1 (melhor de um)",
          "Eliminatória simples (sem repescagem)",
        ],
      },
      {
        header: "Horário e Organização",
        content: [
          "Início às 9h00",
          "Ordem das partidas definida por sorteio",
          "Atraso superior a 15 minutos resulta em desclassificação por WO",
        ],
      },
      {
        header: "Contas e Plataforma",
        content: [
          "Cada jogador deve utilizar sua própria conta da Riot Games",
          "A conta será desconectada ao final da partida",
        ],
      },
      {
        header: "Estrutura e Equipamentos",
        content: [
          "Partidas na sala 504",
          "Equipamentos fornecidos: computador, monitor, teclado e mouse padrão",
          "Permitido levar periféricos pessoais (headset, mouse, mousepad e teclado)",
        ],
      },
      {
        header: "Regras de Conduta",
        content: [
          "Proibido uso de programas externos ou modificações (trapaça) — banimento da equipe",
          "Nicknames ofensivos não serão permitidos",
          "Problemas técnicos devem ser reportados imediatamente",
          "Discussões ou brigas fora do jogo podem resultar em banimento da equipe",
        ],
      },
      {
        header: "Coach",
        content: [
          "Cada time poderá contar com 1 coach previamente inscrito",
          "O coach é o único acompanhante autorizado dentro do laboratório",
          "Demais convidados poderão permanecer na área indicada do local",
        ],
      },
    ],
  },
  {
    title: "Rocket League",
    image: grid_rocket_league,
    date: "09/05/2026",
    time: "A partir das 08:30",
    location: "IFSul - Passo Fundo",
    description: "Descrição",
  },
  {
    title: "Xadrez",
    image: grid_chess,
    date: "09/05/2026",
    time: "A partir das 08:30",
    location: "IFSul - Passo Fundo",
    description:
      "Xadrez é um jogo de tabuleiro estratégico jogado entre duas pessoas. O objetivo é colocar o rei do oponente em xeque-mate, ameaçando o rei de forma que ele não possa se mover para uma posição segura.",
  },
];

export default modalitiesContent;
