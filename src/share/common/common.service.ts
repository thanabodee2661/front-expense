import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  get<T>(url, param): Observable<any> {
    return this.http.get<T>(`${environment.host}${url}`, param);
  }

  post<T>(url, param): Observable<any> {
    return this.http.post<T>(`${environment.host}${url}`, param);
  }
}
