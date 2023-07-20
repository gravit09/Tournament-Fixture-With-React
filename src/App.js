import React from "react";
import { Bracket } from "react-tournament-bracket";

export default function App() {
  const generateGame = (id, homeName, visitorName) => {
    return {
      id: id,
      name: "1 match",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "",
            name: homeName,
          },
          score: {
            score: 1,
          },
        },
        visitor: {
          team: {
            id: "",
            name: visitorName,
          },
          score: {
            score: 0,
          },
        },
      },
    };
  };

  const games = [
    generateGame("1", "Player 1", "Player 2"),
    generateGame("2", "Player 3", "Player 4"),
    generateGame("3", "Player 5", "Player 6"),
    generateGame("4", "Player 7", "Player 8"),
    generateGame("5", "Player 9", "Player 10"),
    generateGame("6", "Player 11", "Player 12"),
    generateGame("7", "Player 13", "Player 14"),
    generateGame("8", "Player 15", "Player 16"),
    generateGame("9", "Player 17", "Player 18"),
    generateGame("10", "Player 19", "Player 20"),
    generateGame("11", "Player 21", "Player 22"),
    generateGame("12", "Player 23", "Player 24"),
    generateGame("13", "Player 25", "Player 26"),
    generateGame("14", "Player 27", "Player 28"),
    generateGame("15", "Player 29", "Player 30"),
    generateGame("16", "Player 31", "Player 32"),

    // Add more game objects here
  ];

  const round2 = (id, homeIndex, visitorIndex) => {
    const homeGame = games[homeIndex];
    const visitorGame = games[visitorIndex];

    return {
      id: id,
      name: "2 round",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "10",
            name: homeGame.sides.home.team.name,
          },
          score: {
            score: 1,
          },
          seed: {
            displayName: "A1",
            rank: 1,
            sourceGame: homeGame,
            sourcePool: {},
          },
        },
        visitor: {
          team: {
            id: "11",
            name: visitorGame.sides.home.team.name,
          },
          score: {
            score: 0,
          },
          seed: {
            displayName: "A2",
            rank: 1,
            sourceGame: visitorGame,
            sourcePool: {},
          },
        },
      },
    };
  };

  const quaterFinal = [
    round2("1", 0, 1),
    round2("2", 2, 3),
    round2("3", 4, 5),
    round2("4", 6, 7),
    round2("5", 8, 9),
    round2("6", 10, 11),
    round2("7", 12, 13),
    round2("8", 14, 15),
  ];

  const round3 = (id, homeIndex, visitorIndex) => {
    const homeGame = quaterFinal[homeIndex];
    const visitorGame = quaterFinal[visitorIndex];

    return {
      id: id,
      name: "3 round",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "1jh0",
            name: homeGame.sides.home.team.name,
          },
          score: {
            score: 1,
          },
          seed: {
            displayName: "A1",
            rank: 1,
            sourceGame: homeGame,
            sourcePool: {},
          },
        },
        visitor: {
          team: {
            id: "11lml",
            name: visitorGame.sides.home.team.name,
          },
          score: {
            score: 0,
          },
          seed: {
            displayName: "A2",
            rank: 1,
            sourceGame: visitorGame,
            sourcePool: {},
          },
        },
      },
    };
  };

  const semiFinal = [
    round3("1", 0, 1),
    round3("2", 2, 3),
    round3("3", 4, 5),
    round3("4", 6, 7),
  ];

  const round4 = (id, homeIndex, visitorIndex) => {
    const homeGame = semiFinal[homeIndex];
    const visitorGame = semiFinal[visitorIndex];

    return {
      id: id,
      name: "4th round",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "1jh0",
            name: homeGame.sides.home.team.name,
          },
          score: {
            score: 1,
          },
          seed: {
            displayName: "A1",
            rank: 1,
            sourceGame: homeGame,
            sourcePool: {},
          },
        },
        visitor: {
          team: {
            id: "11lml",
            name: visitorGame.sides.home.team.name,
          },
          score: {
            score: 0,
          },
          seed: {
            displayName: "A2",
            rank: 1,
            sourceGame: visitorGame,
            sourcePool: {},
          },
        },
      },
    };
  };

  const finals = [round4("1", 0, 1), round4("2", 2, 3)];

  const generateFinalGame = (id, homeIndex, visitorIndex) => {
    const homeGame = finals[homeIndex];
    const visitorGame = finals[visitorIndex];

    return {
      id: id,
      name: "Final Round",
      scheduled: Number(new Date()),
      sides: {
        home: {
          team: {
            id: "1jh0",
            name: homeGame.sides.home.team.name,
          },
          score: {
            score: 1,
          },
          seed: {
            displayName: "A1",
            rank: 1,
            sourceGame: homeGame,
            sourcePool: {},
          },
        },
        visitor: {
          team: {
            id: "11lml",
            name: visitorGame.sides.home.team.name,
          },
          score: {
            score: 0,
          },
          seed: {
            displayName: "A2",
            rank: 1,
            sourceGame: visitorGame,
            sourcePool: {},
          },
        },
      },
    };
  };

  const final6 = generateFinalGame("1", 0, 1);

  return (
    <div className="container">
      <Bracket game={final6} />
    </div>
  );
}
