import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { User } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$ = new BehaviorSubject<User>({} as User);

  constructor(private http: HttpClient) {}

  initUser$(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/api/users/self').pipe(
      tap((user) => this.user$.next(user)),
    );
  }
}
