import type { Feature } from "geojson";

// O tipo oficial da biblioteca, estendido para incluir a 'rsmKey'
// que o react-simple-maps adiciona em tempo de execução.
export type GeographyType = Feature & { rsmKey: string };

// A estrutura de uma única lei
export type Law = {
  title: string;
  summary: string;
  link: string;
};

// O objeto que contém as leis, separadas por status
export type Laws = Record<string, Law[]>;

// O objeto que representa o estado selecionado no mapa
export type SelectedState = {
  acronym: string;
  name: string;
  status: string;
  laws: Laws;
};
