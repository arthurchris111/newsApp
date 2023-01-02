import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { postRegistration } from 'src/app/registration.model';
import { GetPost } from 'src/app/getPost.model';

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(private http:HttpClient){}

  //post
  createAndStorePost(name:any, surname:any, email:any, password:any ){
    const postData: postRegistration = {
      name: name, surname: surname, email: email, password: password
    }
  this.http.post('https://newsappuserdetails-default-rtdb.firebaseio.com/posts.json',postData).subscribe(responseData =>{
     console.log(responseData)
 })
  }

  //fetch
fetchPosts( email:any, password:any ){
    const postData:GetPost = {
       email: email, password: password
    }
   this.http.get('https://newsappuserdetails-default-rtdb.firebaseio.com/posts.json').subscribe(responseData =>
     {console.log(responseData)
    })


}
}
