import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, param: Object): Observable<any> {
    let queryParams = '';
    let count = 0;
    if (param !== null && param !== {}) {
      queryParams = '?';
      for (const key in param) {
        if (param.hasOwnProperty(key)) {
          queryParams += `${key}=${param[key]}`;
          count++;
          if (count < Object.keys(param).length) {
            queryParams += '&';
          }
        }
      }
    }
    return this.http.get<T>(`${environment.host}${url}${queryParams}`, param);
  }

  post<T>(url: string, param: Object): Observable<any> {
    return this.http.post<T>(`${environment.host}${url}`, param);
  }
}
