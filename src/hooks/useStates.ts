import { useEffect, useState } from "react";

type Status = {
  id: string;
  label: string;
};

type Estado = {
  id: number;
  estadoSigla: string;
  status: Status;
  leis: Record<string, { titulo: string; resumo: string; link: string }[]>;
};

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
