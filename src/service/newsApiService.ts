import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class newsApiService {

  constructor(private http:HttpClient){}

 //newsApiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ea8691f0412345cda5abc05f45368a33"

  topHeading():Observable<any>{
    return this.http.get(this.newsApiUrl);
  }
}



