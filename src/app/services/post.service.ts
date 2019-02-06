import {Injectable} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private post: Post[] = [
    {

      title: 'Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      likes: 0,
      createdAt: new Date(),
    },
    {

      title: 'Post 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      likes: 0,
      createdAt: new Date(),
    },
    {

      title: 'Post 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      likes: 0,
      createdAt: new Date(),
    },
    {

      title: 'Post 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      likes: 0,
      createdAt: new Date(),
    },
    {

      title: 'Post 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Ab dolor harum itaque nam officia quas quidem sit temporibus. Hic, maxime!',
      likes: 0,
      createdAt: new Date(),
    },
  ];
  postSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPost() {
    this.postSubject.next(this.post.slice());
  }

  addPost(post: Post) {
    this.post.push(post);
    this.emitPost();
  }


  subOneLike(i: number) {
    this.post[i].likes--;
    this.emitPost();

  }

  addOneLike(i: number) {
    this.post[i].likes++;
    this.emitPost();
  }

  resetOne(i: number) {
    this.post[i].likes = 0;
    this.emitPost();
  }

  removePost(i: number) {
    if (confirm('Are you sure to delete ' + this.post[i].title)) {
      this.post.splice(i, 1);
      this.emitPost();
    }
  }

  getLikes(i: number) {
    return this.post[i].likes;
  }


}
