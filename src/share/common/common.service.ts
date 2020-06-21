import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  get<T>(url, param) {
    return this.http.get<T>(`${environment.host}${url}`, param);
  }

  post<T>(url, param) {
    return this.http.post<T>(`${environment.host}${url}`, param);
  }
}
