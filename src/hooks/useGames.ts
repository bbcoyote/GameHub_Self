// To add more objects from the endpoint  go to RAWG docs and add them to the interface. Good Luck untangling this mess!
import { GameQuery } from "../App";
import useData from "./useData";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
};

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery.genre?.id, gameQuery.platform?.id]
  );

export default useGames;
