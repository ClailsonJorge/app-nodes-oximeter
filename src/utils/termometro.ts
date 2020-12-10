import { termometros } from "../mock/termometros";

export interface TypeTermometro {
  id: number;
  name: string;
  temperatura: number;
  estado: string;
}

export default class Termometro {
  termometros:TypeTermometro[] = termometros;

  getTermometros():TypeTermometro[]{
    return this.termometros;
  }
}