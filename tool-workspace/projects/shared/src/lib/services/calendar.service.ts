import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  currentYear() {
    return new Date().getFullYear();
  }
}
