// To add more objects from the endpoint  go to the docs and add them to the interface.
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

const useGames = () => useData<Game>("/games");

export default useGames;
