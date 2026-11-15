import { Injectable } from '@angular/core';

export interface Calculation {
  expression: string;
  result: number;
}

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {
  history: Calculation[] = [];

  selectedResult: number | null = null;

  clearHistory() {
    this.history.length = 0;
  }

  constructor() { }
}
