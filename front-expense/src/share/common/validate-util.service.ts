import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateUtilService {

  constructor() { }

  isEmpty(...values: string[]) {
    for (const value of values) {
      if (typeof(value) === 'undefined') {
        return true;
      } else if (value || value !== null || value.trim().length > 0) {
        return false;
      }
    }
    return true;
  }

  isNotEmpty(...values: string[]) {
    console.log(values)
    for (const value of values) {
      if (typeof(value) === 'undefined' || !value || value === null || value.trim().length === 0) {
        return false;
      }
    }
    return true;
  }
}
