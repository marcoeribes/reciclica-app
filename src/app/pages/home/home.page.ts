import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post/Post';
import { User } from 'src/app/model/user/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PostService } from 'src/app/services/database-management/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  /*user: User = {
    id: 5,
    name: "John",
    email: "john@email.com",
    password: "password"
  }*/
  user: User =     {
    "id": 1684890054248,
    "name": "BillyBob",
    "email": "billybob@email.com",
    "password": "test1234"
  };
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
  constructor(private router: Router, private authService: AuthService, private postService: PostService) { }

  ngOnInit() {
    //currentUser = this.authService.getCurrentUser();
    /*this.postService.getPosts(this.currentUser.id).subscribe(observer => {
      console.log("observer", observer[0]);
      //this.post = observer[0];
    });*/
    //this.user = this.authService.getCurrentUser()
    console.log("current user", this.user);
    console.log("posts", this.posts)

    this.postService.getPosts(this.user.id).subscribe(posts => {
      this.posts = posts;
    })
    console.log("posts2", this.posts)

  }
}
