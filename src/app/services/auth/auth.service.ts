import { Injectable } from '@angular/core';
import { Observable, map, mapTo, of, switchMap } from 'rxjs';
import { User } from 'src/app/model/user/User';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/users';
  users$: Observable<User[]> = this.allUsers();

  constructor(private http:HttpClient) { }

  /*register(user: User): Observable<void>{
    return new Observable<void>(observer => {
      this.users$.subscribe(allUserData => {
        if (allUserData.find(userData => userData.email === user.email)){
          observer.error({message: "Email is already registered"});
        }
      });
      this.http.post(this.apiUrl, user).subscribe(
        (res) => {
          console.log("res", res);
          console.log(1);
          observer.complete();
          console.log(2);
          return of();
          console.log(3)
        },
        (error) => {
          observer.error({message: "Internal Server Error 500"});
        }
      )
    });
  }*/

  register(user: User): Observable<void>{
  return this.users$.pipe(
    switchMap(allUserData => {
      if (allUserData.find(userData => userData.email === user.email)) {
        throw {message: "Email is already registered"};
      }
      return this.http.post<void>(this.apiUrl, user);
    })
  );
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

  allUsers(): Observable<User[]> {
    return this.http.get<any>(this.apiUrl);
  }


}
