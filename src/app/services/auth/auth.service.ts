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
      setTimeout(() => {
        let flag;
        user$.subscribe(data => {flag =  data.length === 0});
        if (flag){
          observer.error({message: 'User not found'});
          observer.next();
        } else {
          let user = new User();
          user$.subscribe(data => {
            [user] = data;
            console.log("destructured user", user);
            observer.next(user);
            observer.complete();
          })
        }
      }, 3000)
    });
  }

  getUsers(): Observable<User[]> {
    let usersDB$ = this.http.get<User[]>(this.apiUrl);
    console.log(usersDB$);
    return usersDB$;
  }

  /*login(email: string, password: string): Observable<User> {
    let params = new HttpParams().set('email', email).set('password', password);
    let currentUser = this.http.get<User[]>('http://localhost:5000/users', {params: params});
    return new Observable<User>(observer => {
      setTimeout(() => {
        if (email !== currentUser.email){
          observer.error({message: 'User not found'});
          observer.next();
        } else {
          const user = new User();
          user.email = email;
          observer.next(user);
        }
        observer.complete();
      }, 3000)
    });
  }*/

}
