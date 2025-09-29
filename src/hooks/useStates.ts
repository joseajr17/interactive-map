import { useEffect, useState } from "react";

type Estado = { id: number; estadoSigla: string; status: string };

export function useStates() {
  const [data, setData] = useState<Estado[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/states")
      .then((res) => res.json())
      .then((json) => setData(json.data)) // pega só o "data"
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
