import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { postReg } from 'src/registration.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { post } from 'src/post.model';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registration!: FormGroup;
  submitted: boolean = false;
  route: any;


  // formBuilder: any;

  constructor(private FormBuilder:FormBuilder, private http: HttpClient) { }

  buildRegistrationForm(): void {
    this.registration = this.FormBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    })
  }

  ngOnInit(): void {
    this.buildRegistrationForm();
  }

  //sending http request
  onCreatePost(postData:{name:any; surname:any;email:any; password:any}){
    this.http.post('https://newsappuserdetails-default-rtdb.firebaseio.com/',postData).subscribe(responseData => { console.log(responseData)
})

  }


  onSubmit(postData: postReg) {
    this.submitted = true;

    if (this.registration.invalid) {
      return
    }else{
    }
     console.log(this.registration.value)


    this.registration.reset();
    this.submitted = false

  }
}
