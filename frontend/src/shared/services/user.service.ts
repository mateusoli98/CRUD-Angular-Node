import { User } from './../models/user.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  list(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.urlApi}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  create(user: User): Observable<User> {
    return this.http.post(`${environment.urlApi}`, JSON.stringify(user)).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  update(user: User) {
    return this.http
      .put(`${environment.urlApi}/${user.id}`, JSON.stringify(user))
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  delete(user: User) {
    return this.http.delete(`${environment.urlApi}/${user.id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
