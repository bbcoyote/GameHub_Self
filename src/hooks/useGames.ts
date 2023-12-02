// To add more objects from the endpoint  go to the docs and add them to the interface.
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

type Game = {
  id: number;
  name: string;
};

type FechGmeResp = {
  count: number;
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const Controller = new AbortController();
    const Signal = Controller.signal;
    apiClient
      .get<FechGmeResp>("/games", { signal: Signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => Controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
