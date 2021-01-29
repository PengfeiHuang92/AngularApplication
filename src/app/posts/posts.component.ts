import { HttpClient } from '@angular/common/http';
import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  
  posts: any;
  
  constructor(private service: PostService) { 
   
  }

  //HTTP request : Get => Get data
  ngOnInit(): void {
    this.service.getAll()
    .subscribe( response=> this.posts = response);
  }

  //HTTP request : Post => Creast data
  createPost(input:HTMLInputElement){
    let post:any = {title: input.value};
    input.value='';
    this.service.createPost(post)
    .subscribe(
      response =>{
      this.posts.splice(0,0,post);
    },
     (error: Response) => {
       if (error.status === 400)
          //this.form.serErrors(error.json());
          alert('An unexpectd error occurred.');
       else
          throw error;
    });
  }

  //HTTP request: Put => Update data
  updatePost(post:any){
    this.service.updatePost(post) 
    .subscribe( response =>console.log(response));
  }

  //HTTP request: Delete => Delete data
  deletePost(post:any){
    this.service.deletePost(post)
    .subscribe (
      response =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },
      (error:Response)=>{
      if (error.status === 404)
        alert('This post has been deleted.')
      else
        throw error;
    })
  }

  
}
