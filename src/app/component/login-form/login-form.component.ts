import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostLogin } from 'src/app/post.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent implements OnInit {
  signUp!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  buildLoginForm(): void {
    this.signUp = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  onSubmit(postData: PostLogin) {
    this.submitted = true;

    if (this.signUp.invalid) {
      return
    }

    // this.signUp.reset();
    this.submitted = false

  }
}
