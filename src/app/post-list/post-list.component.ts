import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  post: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (post: Post[]) => {
        this.post = post;
      }
    );
    this.postService.emitPost();

  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

  subLikes(i: number) {
    this.postService.subOneLike(i);
  }

  addLikes(i: number) {
    this.postService.addOneLike(i);
  }

  onLikeChange(i: number) {
    if (this.postService.getLikes(i) > 0) {
      return 'list-group-item-success my-2 px-3 py-1 rounded border';
    } else if (this.postService.getLikes(i) < 0) {
      return 'list-group-item-danger my-2 px-3 py-1 rounded border';
    } else {
      return 'list-group-item my-2 py-1 px-3';
    }
  }

  resetLikes(i: number) {
    this.postService.resetOne(i);
  }

  deletePost(i: number) {
    this.postService.removePost(i);
  }

  heartChange(i: number) {
    if (this.postService.getLikes(i) > 0) {
      return 'fas fa-heart text-primary ml-2';
    } else if (this.postService.getLikes(i) < 0) {
      return 'fas fa-heart-broken text-danger ml-2';
    } else {
      return 'far fa-heart ml-2';
    }
  }

}
