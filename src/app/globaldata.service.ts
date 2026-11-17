import { Injectable } from '@angular/core';

// Defines the structure for individual calculation records,
// keeping the original expression and calculated result separate
// so either value can be accessed independently.
export interface Calculation {
  expression: string;
  result: number;
}

// Registers the service at the application root so all pages
// can access the same shared instance and its data.
@Injectable({
  providedIn: 'root'
})


export class GlobaldataService {
  history: Calculation[] = [];

  // Holds a result selected from History for use on Home.
  // Null indicates no pending selection; zero is a valid result.
  selectedResult: Calculation | null = null;

  // Resets the history array length to 0,
  // effectively removing all its elements while preserving
  // the existing array reference used by other components.
  clearHistory() {
    this.history.length = 0;
  }

  constructor() { }
}
