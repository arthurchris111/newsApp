import { LoginFormComponent } from './../app/component/login-form/login-form.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { postRegistration } from 'src/app/registration.model';
import { GetPost } from 'src/app/getPost.model';
import { map } from 'rxjs/operators';
@Injectable({providedIn: 'root'})

export class PostsService {
  signUp: any;
  route: any;

  constructor(private http:HttpClient){}

 //saving user details to local storage
  addUser(user: any){
    let users = []
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users')as any)
      users = [user, ...users];
    }else{
      users = [user]
    }
    localStorage.setItem('Users',JSON.stringify(user))
  }

  //post
  createAndStorePost(name:any, surname:any, email:any, password:any ){
    const postData: postRegistration = {
      name: name, surname: surname, email: email, password: password
    };
     this.http.post('https://newsappuserdetails-default-rtdb.firebaseio.com/posts.json',postData).subscribe(responseData =>{
     console.log(responseData);
    });
  }

  //get
   getPosts(){
    return this.http.get<any>('https://newsappuserdetails-default-rtdb.firebaseio.com/posts.json');
  // .subscribe(responseData => {
      // const user = responseData.find((a:any)=>{
      //  return a.email === this.signUp.email.value.email && a.password === this.signUp.password.value.password
      // });
  //     console.log(responseData);
  //   //    if(user){
  //   //     alert('Login Successfully')
  //   //     this.signUp.reset()
  //   //     this.route.navigate(['news'])
  //   //  } else{
  //   //   alert('user not found')
  //   // }
  // });
 }
}


// .pipe(

//     //Using RxJS Operators to Transform responseData into an array
//     map(responseData =>{
//       const postArray = [];
//       for(const key in responseData){
//         if(responseData.hasOwnProperty(key)){
//           postArray.push({responseData});
//         }
//       }
//       return postArray;
//     })
//    )
