// import { PostsService } from './../../../service/post.service';
import { UsersComponent } from './../users/users.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { postRegistration } from 'src/app/registration.model';
import { PostsService } from 'src/service/post.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registration!: FormGroup;
  submitted: boolean = false;
  service: any;
  // route: any;


  // formBuilder: any;
  constructor(private FormBuilder:FormBuilder, private http: HttpClient,private PostsService: PostsService, private route:Router ) { }

  buildRegistrationForm(): void {
    this.registration = this.FormBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    this.registration;
    this.buildRegistrationForm();
  }

  //sending http request
 //   onCreatePost(postData:postRegistration){
 //    this.PostsService.createAndStorePost(postData.name, postData.surname, postData.email, postData.password)
 //  }

  onSubmit(postData: postRegistration) {
    this.submitted = true;

    if (this.registration.invalid) {
      return
    }else{
    }
     console.log(this.registration.value)


    this.registration.reset();
    this.submitted = false

    this.PostsService.createAndStorePost(postData.name, postData.surname,postData.email,postData.password)


  }
}
