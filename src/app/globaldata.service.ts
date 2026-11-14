import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {
  history: string[] = [];

  clearHistory() {
    this.history.length = 0;
  }

  constructor() { }
}
