import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private http = inject(HttpClient);

  news(type: string): Observable<any> {
    return this.http.get(`${environment.news}/${type}`);
  }

  videos(): Observable<any> {
    return this.http.get(`${environment.videos}/videos.json`);
  }

  contact(contact: any): Observable<any> {
    return this.http.post<any>(`${environment.backend}/mail`, contact);
  }

}
