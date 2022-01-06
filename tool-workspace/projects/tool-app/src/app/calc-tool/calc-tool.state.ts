import { HistoryEntry } from "./models/history";

export interface Result {
  value: number,
  errorMessage: string,
}

export interface CalcToolState {
  result: Result,
  history: HistoryEntry[],
}