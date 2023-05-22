import { Injectable } from '@angular/core';
import { Observable, map, mapTo, switchMap } from 'rxjs';
import { User } from 'src/app/model/user/User';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/users';
  users: User[];

  constructor(private http:HttpClient) { }

  recoverEmailPassword(email: string) : Observable<void> {
    return new Observable<void>(observer => {
      setTimeout(() => {
        if (email == "error@email.com"){
          observer.error({message: "Email not found"});
        }
        observer.next();
        observer.complete();
      }, 3000);
    })
  }

  login(email: string, password: string): Observable<User> {
    let params = new HttpParams().set('email', email).set('password', password);
    let user$ = this.http.get<any>('http://localhost:5000/users', {params: params})
    return new Observable<User>(observer => {
      user$.subscribe(reactor => {
        let user = new User();
        [user] = reactor;
        if (user === undefined){
          observer.error({message: 'User not found'});
        } else {
          observer.next(user);
          observer.complete()
        }
      })
    })
  }



}
