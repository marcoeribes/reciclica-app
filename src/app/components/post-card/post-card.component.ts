import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  isLiked: boolean = false;
  isStarred: boolean = false;
  clickedOnComment: boolean = false;

  constructor() { }

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  toggleStar() {
    this.isStarred = !this.isStarred;
  }

  toggleComment() {
    this.clickedOnComment = !this.clickedOnComment;
  }

  ngOnInit() {}
    @Input() name: string;
    @Input() dateCreated: string;
    @Input() postContent: string;
}
