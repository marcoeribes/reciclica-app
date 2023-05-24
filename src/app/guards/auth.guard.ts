import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { AppState } from 'src/store/AppState';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {


  constructor(private store: Store<AppState>, private router: Router){}

  /*canLoad() : Observable<boolean> {
    return this.store.select('login').pipe(
      switchMap(loginState => {
        if (loginState.isLoggedIn){
          return of(true)
        }
        this.router.navigateByUrl('login');
        return of(true);
      })
    )
  }*/

  canLoad() : Observable<boolean> {
    return of(true);
  }
  /*canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/ 
}
