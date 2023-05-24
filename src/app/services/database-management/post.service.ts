import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/model/user/User';

import {HttpClient, HttpParams} from '@angular/common/http';
import { Post } from 'src/app/model/post/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:5000/posts';
  public currentUser: User;

  constructor(private http:HttpClient) {}

  getPosts(authorId: number): Observable<Post[]> {
    let params = new HttpParams().set('authorId', authorId)
    return this.http.get<any>(this.apiUrl, {params: params})
  }
}