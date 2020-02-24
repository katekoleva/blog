import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPost: Post[]

  constructor(private postService:PostService) {

  }
   ngOnInit() {
   this.arrPost = this.postService.getAllPost();
  }

async manejarCategoria($event){
  this.arrPost = await this.postService.getAllPostByCategoria($event.target.value);
 }
async manejarClick($event){
 await this.postService.borrar($event.target.id)
 this.arrPost = await this.postService.getAllPost()
}
}
