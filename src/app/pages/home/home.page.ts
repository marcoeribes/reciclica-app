import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  currentUser: User = {
    id: 5,
    name: "John",
    email: "john@email.com",
    password: "password"
  }//
  posts: Post[] = [
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
  ];
  post: Post = {
    "id": 300,
    "authorId": 5,
    "dateCreated": "01/01/1000",
    "content": "This is my first post ever!",
    "comments": [null]
  }
  constructor(private router: Router, private authService: AuthService, private postService: PostService) { }

  ngOnInit() {
    console.log("current user", this.currentUser);
    //currentUser = this.authService.getCurrentUser();
    /*this.postService.getPosts(this.currentUser.id).subscribe(observer => {
      console.log("observer", observer[0]);
      //this.post = observer[0];
    });*/
    console.log("post", this.post)
  }


  goToPickupCalls(){
    this.router.navigate(['pickup-calls']);
  }

  newPickupCall(){
    this.router.navigate(['pickup-call']);
  }



  
  


}
