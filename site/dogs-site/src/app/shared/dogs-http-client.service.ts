import { APIClient } from './contracts/http-client.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class DogAPIClient implements APIClient {
    private url = 'http://localhost:3333/api';
    constructor(private http: HttpClient) {}

    get<T>(resource: string): Observable<T> {
        return this.http.get<T>(`${this.url}${resource}`, {
          headers: {
            ['API_KEY']: 'v1Vld/Dr34m5'
          }
        });
    }

    post<T>(resource: string, params: unknown): Observable<T> {
      return this.http.post<T>(`${this.url}${resource}`, params, {
        headers: {
          ['api_key']: 'v1Vld/Dr34m5'
        }
      });
    }
}
