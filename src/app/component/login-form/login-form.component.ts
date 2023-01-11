import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PostLogin } from 'src/app/post.model';
import { PostsService } from 'src/service/post.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  signUp!: FormGroup;
  submitted: boolean = false;
  isFetching: boolean = false;
  show = true;
  password: any;


  constructor(private formBuilder: FormBuilder, private postsService:PostsService, private route: Router) { }

  buildLoginForm(): void {
    this.signUp = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    this.signUp;
    this.buildLoginForm();
    this.onGetPosts;
    this.password = 'password'
  }


 //toggle hide and show password
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }


 //GET post
 onGetPosts(){
    this.isFetching = true
    this.postsService.getPosts().pipe(
      map(ResponseData =>{
        const postArray = []
        for(const key in ResponseData){
          if(ResponseData.hasOwnProperty(key)){
            postArray.push({...ResponseData})
          }
        }
        return postArray
      })
    ).subscribe(responseData => {
    this.isFetching = false
    console.log(responseData);
    const user = responseData.find((a:any) => {
      return a.email === this.signUp.value.email && a.password === this.signUp.value.password;
    });
    console.log(user)
    if(Object.keys(user).length){
      alert('Login Successfully')
      // this.signUp.reset()
      this.route.navigate(['news'])
     } else{
      alert('user not found')
    }
    })
  }

  onSubmit(postData: PostLogin) {
    this.submitted = true;

    if (this.signUp.invalid) {
      return
    }else{
      this.onGetPosts();
    }
    // this.signUp.reset();
    this.submitted = false

  }

}
