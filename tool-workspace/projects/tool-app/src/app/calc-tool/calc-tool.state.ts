import { HistoryEntry } from "./models/history";


export interface CalcToolState {
  result: number;
  history: HistoryEntry[];
}