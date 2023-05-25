import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // <-- import this

import { RedditService } from './reddit.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // <-- and add it here
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
