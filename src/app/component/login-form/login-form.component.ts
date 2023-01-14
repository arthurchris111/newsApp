import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PostLogin } from 'src/app/post.model';
import { PostsService } from 'src/service/post.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  signUp!: FormGroup;
  submitted: boolean = false;
  isFetching: boolean = false;
  show:boolean = true;
  password: any;
  user: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private route: Router
  ) {}

  buildLoginForm(): void {
    this.signUp = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.signUp;
    this.buildLoginForm();
    this.onGetPosts;
    this.password = 'password';
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
  onGetPosts() {
    this.isFetching = true;
    this.postsService.getPosts().subscribe({
      next: (responseData: any) => {
        this.isFetching = false;
        const userArray = [];
        for (const key in responseData) {
          console.log(responseData[key]);
          userArray.push(responseData[key]);
        }
        userArray.find((res: any) => {
          this.user = res.email === this.signUp.value.email && res.password === this.signUp.value.password;
          console.log(this.user);

          if (this.user) {
            this.route.navigate(['news']);
            alert('Login Successfully');
          } else {
            alert('user not found');
          }
        });
      }
      ,
      error: (err: any) => {
        alert(err);
      },
    });
  }

  onSubmit(postData: PostLogin) {
    this.submitted = true;

    if (this.signUp.invalid) {
      return;
    } else {
      this.onGetPosts();
    }
    // this.signUp.reset();
    this.submitted = false;
  }
}
