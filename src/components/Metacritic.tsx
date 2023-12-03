import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
  fontSize: string;
  borderRadius: string;
  paddingX: number;
}

const Metacritic = ({ game, fontSize, borderRadius, paddingX }: Props) => {
  const score = game.metacritic;
  const color =
    score > 89
      ? "green"
      : score > 75
      ? "yellow"
      : score > 60
      ? "orange"
      : score < 60
      ? "red"
      : "";

  return (
    <>
      <Badge
        paddingX={paddingX}
        borderRadius={borderRadius}
        fontSize={fontSize}
        colorScheme={color}>
        {score}
      </Badge>
      {/* {score > 89 ? (
        <Badge
          paddingX={paddingX}
          borderRadius={borderRadius}
          fontSize={fontSize}
          colorScheme='green'>
          {game.metacritic}
        </Badge>
      ) : score > 75 ? (
        <Badge
          paddingX={paddingX}
          borderRadius={borderRadius}
          fontSize={fontSize}
          colorScheme='orange'>
          {score}
        </Badge>
      ) : score > 60 ? (
        <Badge
          paddingX={paddingX}
          borderRadius={borderRadius}
          fontSize={fontSize}
          colorScheme='brown'>
          {score}
        </Badge>
      ) : score < 60 ? (
        <Badge
          paddingX={paddingX}
          borderRadius={borderRadius}
          fontSize={fontSize}
          colorScheme='red'>
          {score}
        </Badge>
      ) : null} */}
    </>
  );
};

export default Metacritic;
