import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Platformicon from "./Platformicon";
import Metacritic from "./Metacritic";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize='2xl'>{game.name}</Heading>
          <HStack justifyContent='space-between'>
            <Platformicon
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <Metacritic
              paddingX={5}
              borderRadius='5px'
              fontSize='1rem'
              game={game}
            />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
