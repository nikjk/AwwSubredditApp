import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.redditService.getPosts().subscribe(response => {
      this.posts = response.data.children.map(child => child.data).slice(0, 10); // <-- only take the first 10 posts
    });
  }
}
