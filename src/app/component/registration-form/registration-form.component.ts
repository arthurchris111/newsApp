import { Component, OnInit } from '@angular/core';
import { post } from 'src/post.model';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registration!: FormGroup;
  submitted: boolean = false;
  formBuilder: any;

  constructor() { }

  buildRegistrationForm(): void {
    this.registration = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(postData: post) {
    this.submitted = true;

    if (this.registration.invalid) {
      return
    }

    this.registration.reset();
    this.submitted = false

    // this.userService.createAndStorePost(postData.email, postData.password)
  }
}
