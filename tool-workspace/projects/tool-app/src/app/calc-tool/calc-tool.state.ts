import { HistoryEntry } from "./models/history";


export interface CalcToolState {
  result: {
    value: number;
    errorMessage: string;
  },
  history: HistoryEntry[];
  // errorMessage: string;
}