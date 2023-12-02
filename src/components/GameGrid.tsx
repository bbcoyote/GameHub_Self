// To add more objects from the endpoint  go to the docs and add them to the interface.
import { Button, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

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
