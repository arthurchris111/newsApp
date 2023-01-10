import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PostLogin } from 'src/app/post.model';
import { PostsService } from 'src/service/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  signUp!: FormGroup;
  submitted: boolean = false;
  isFetching: boolean = false;

  constructor(private formBuilder: FormBuilder, private PostsService:PostsService, private route: Router) { }

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
  }


//GET post
 onGetPosts(){
    this.isFetching = true
    this.PostsService.getPosts().subscribe(responseData => {
     this.isFetching = false
    const user = responseData.find((a:any) => {
      return a.email === this.signUp.value.email && a.password === this.signUp.value.password;
    });
    if(user){
      alert('Login Successfully')
      this.signUp.reset()
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

      // this.route.navigate(['news'])
    }

    // this.signUp.reset();
    this.submitted = false

  }
}
