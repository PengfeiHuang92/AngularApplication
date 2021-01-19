import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }


  //Get  => Get data
  getAll(){
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }

  //Post => Create data
  createPost(post:any){
    return this.http.post(this.url,JSON.stringify(post))
    .pipe(
      catchError(this.handleError)
    );
  }

  //Put  => Update data
  updatePost(post:any){
    //patch method only update required the property such as setting id to 1000
    return this.http.patch(this.url + '/' + post.id ,JSON.stringify({id:1000}))
    .pipe(
      catchError(this.handleError)
    );
    //put method  update the whole object
    //this.http.put(this.url + '/' + post.id ,JSON.stringify(post))
  }

  //Delete => Delete data 
  deletePost(post:any){
    return this.http.delete(this.url + '/' + post.id)
    .pipe(
      catchError(this.handleError)
    );
  }


  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}