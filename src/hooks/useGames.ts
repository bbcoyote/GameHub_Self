// To add more objects from the endpoint  go to the docs and add them to the interface.
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

type FechGmeResp = {
  count: number;
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const Controller = new AbortController();
    const Signal = Controller.signal;
    setLoading(true);
    apiClient
      .get<FechGmeResp>("/games", { signal: Signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => Controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
