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
  show: boolean = false;
  password: any;
  user: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private route: Router // private toast: NgToastService
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
    this.password = 'password';
  }

  togglePassword() {
    this.show = !this.show;
  }

  //login
  login() {
    this.isFetching = true;
    this.postsService.getPosts().subscribe({
      next: (responseData: any) => {
        this.isFetching = false;
        const userArray = [];

        for (const key in responseData) {
          console.log(responseData[key]);
          userArray.push(responseData[key]);
        }

        const user = userArray.find((result: any) => {
          return (
            result.email === this.signUp.value.email &&
            result.password === this.signUp.value.password
          );
        });

        if (user) {
          this.route.navigate(['news']);
          alert('Login Successfully');
        } else {
          alert('user not found');
        }
      },
    });
  }

  onSubmit(postData: PostLogin) {
    this.submitted = true;

    if (this.signUp.invalid) {
      return;
    } else {
      this.login();
    }
    // this.signUp.reset();
    this.submitted = false;
  }
}
