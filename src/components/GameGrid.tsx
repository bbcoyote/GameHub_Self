// To add more objects from the endpoint  go to the docs and add them to the interface.

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Button, Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FechGmeResp {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FechGmeResp>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => {
          return (
            <div key={game.id}>
              <li key={game.id}>{game.name}</li>
              <Button>Button</Button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default GameGrid;
