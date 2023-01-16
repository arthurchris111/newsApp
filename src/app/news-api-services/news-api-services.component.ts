import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-api-services',
  templateUrl: './news-api-services.component.html',
  styleUrls: ['./news-api-services.component.css']
})

@Injectable({
  providedIn:'root'
})

export class NewsApiServicesComponent implements OnInit {

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }

  //newsApiUrl

}
