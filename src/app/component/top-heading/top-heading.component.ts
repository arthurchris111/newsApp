import { Component, OnInit } from '@angular/core';
import { newsApiService } from 'src/service/newsApiService';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})

export class TopHeadingComponent implements OnInit {

  constructor(private services:newsApiService) { }

  ngOnInit(): void {
    this.onNewsHeader()
  }

  //display data
  topHeadingDisplay:any = []

  onNewsHeader(){
    this.services.newsHeader().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }


}
