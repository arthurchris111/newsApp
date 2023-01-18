import { Component, OnInit } from '@angular/core';
import { newsApiService } from 'src/service/newsApiService';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
  techNewsHeaderDisplay:any =[]

  constructor(private service:newsApiService) { }

  ngOnInit(): void {
    this.onTechNewsHeader()
  }

  onTechNewsHeader(){
    this.service.techNewsHeader().subscribe((res)=>{
      console.log(res);
      this.techNewsHeaderDisplay = res.articles;

    })
  }



}
