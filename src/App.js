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

  const generateSemiFinalsGame = (id, homeIndex, visitorIndex) => {
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

  const semiFinalsGames = [
    generateSemiFinalsGame("1", 0, 1),
    generateSemiFinalsGame("2", 2, 3),
    generateSemiFinalsGame("3", 4, 5),
    generateSemiFinalsGame("4", 6, 7),
    generateSemiFinalsGame("5", 8, 9),
    generateSemiFinalsGame("6", 10, 11),
    generateSemiFinalsGame("7", 12, 13),
    generateSemiFinalsGame("8", 14, 15),
  ];

  const generateFinalsGame = (id, homeIndex, visitorIndex) => {
    const homeGame = semiFinalsGames[homeIndex];
    const visitorGame = semiFinalsGames[visitorIndex];

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

  const FinalsGames = [
    generateFinalsGame("1", 0, 1),
    generateFinalsGame("2", 2, 3),
    generateFinalsGame("3", 4, 5),
    generateFinalsGame("4", 6, 7),
  ];

  const generateEndGame = (id, homeIndex, visitorIndex) => {
    const homeGame = FinalsGames[homeIndex];
    const visitorGame = FinalsGames[visitorIndex];

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

  const finals = [generateEndGame("1", 0, 1), generateEndGame("2", 2, 3)];

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
