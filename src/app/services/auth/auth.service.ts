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

  register(user: User): Observable<void>{
    console.log("user", user);
    return new Observable<void>(observer => {
      setTimeout(() => {
        if (user.email == "error@email"){
          observer.error({message: "email already registered"});
        } else {
          observer.next();
          observer.complete();
        }
        console.log("user", user);

      }, 3000)
    })
  }

  login(email: string, password: string): Observable<User> {
    let params = new HttpParams().set('email', email).set('password', password);
    let user$ = this.http.get<any>(this.apiUrl, {params: params})
    return new Observable<User>(observer => {
      user$.subscribe(reactor => {
        let user = new User();
        [user] = reactor;
        if (user === undefined){
          observer.error({message: 'Invalid email or password'});
        } else {
          observer.next(user);
          observer.complete()
        }
      })
    })
  }



}
