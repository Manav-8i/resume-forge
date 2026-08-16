import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getDocuments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/documents`, { headers: this.getHeaders() });
  }

  createDocument(docData: { title: string; template_id: number; content?: any }): Observable<any> {
    return this.http.post(`${this.baseUrl}/documents`, docData, { headers: this.getHeaders() });
  }

  getApplications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/applications`, { headers: this.getHeaders() });
  }

  getExports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/exports`, { headers: this.getHeaders() });
  }
}