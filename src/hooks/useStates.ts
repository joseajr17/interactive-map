import { useEffect, useState } from "react";

type Status = {
  id: string;
  label: string;
};

type State = {
  id: number;
  stateAcronym: string;
  status: Status;
  laws: Record<string, { title: string; summary: string; link: string }[]>;
};

export function useStates() {
  const [data, setData] = useState<State[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/states")
      .then((res) => res.json())
      .then((json) => setData(json.data)) // takes only the "data"
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
