import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { postReg } from 'src/postReg.model';

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
      name: [''],
      surname: [''],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      number: [, [Validators.required, Validators.minLength(10)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(postData: postReg) {
    this.submitted = true;

    if (this.registration.invalid) {
      return
    }

    this.registration.reset();
    this.submitted = false

    // this.userService.createAndStorePost(postData.email, postData.password)
  }
}
