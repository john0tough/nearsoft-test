import { Observable } from 'rxjs';

export abstract class APIClient {
    abstract get<T>(resource: string): Observable<T>;
    abstract post<T>(resource: string, params: unknown): Observable<T>;
}