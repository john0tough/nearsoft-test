import { Observable } from 'rxjs';

export abstract class httpClient {
    abstract get<T>(resource: string): Observable<T>;
    abstract post<T>(resource: string, params: any): Observable<T>;
}