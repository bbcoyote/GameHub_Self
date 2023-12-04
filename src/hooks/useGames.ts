// To add more objects from the endpoint  go to RAWG docs and add them to the interface. Good Luck untangling this mess!
import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id } },
    [selectedGenre?.id].filter((id): id is number => id !== undefined)
  );

export default useGames;
