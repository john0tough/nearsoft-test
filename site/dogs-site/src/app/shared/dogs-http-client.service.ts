import { httpClient } from './contracts/http-client.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class DogsHttpClient implements httpClient {

    // private httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       'Authorization': 'v1Vld/Dr34m5'
    //     })
    //   };
    private url = 'http://localhost:3333/api';
    constructor(private http: HttpClient) {}

    get<T>(resource: string): Observable<T> {
        return this.http.get<T>(`${this.url}${resource}`, {
          headers: {
            ['API_KEY']: 'v1Vld/Dr34m5'
          }
        });
    }
    post<T>(resource: string, params: any): Observable<T> {
      throw new Error("Method not implemented.");
    }
}
