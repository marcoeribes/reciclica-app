import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/model/post/Post';
import { User } from 'src/app/model/user/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PostService } from 'src/app/services/database-management/post.service';
import { AppState } from 'src/store/AppState';
import { Store } from '@ngrx/store';
import { UserState } from 'src/store/user/UserState';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: User;
  /*user: User = {
    "id": 1684890054248,
    "name": "BillyBob",
    "email": "billybob@email.com",
    "password": "test1234"
  }*/

  posts: Post[] = [];
  /*[
    {
      "id": 300,
      "authorId": 5,
      "dateCreated": "01/01/1000",
      "content": "This is my first post ever!",
      "comments": [null]
    },
    {
      "id": 302,
      "authorId": 5,
      "dateCreated": "01/01/2222",
      "content": "This is my second post ever!",
      "comments": [null]
    },
  ]*/
  constructor(private router: Router, private authService: AuthService, private postService: PostService,
    private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('user').subscribe(userState => {
      if (userState.userInfo !== null) this.user = userState.userInfo;
    })

    console.log(this.user);
    this.postService.getPosts(this.user.id).subscribe(posts => {
      this.posts = posts;
    })
  }

  
}
