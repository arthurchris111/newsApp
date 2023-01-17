import { Component, OnInit } from '@angular/core';
import { newsApiService } from 'src/service/newsApiService';


@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private service:newsApiService) { }

  ngOnInit(): void {
  }


   //display data
  techNewsDisplay:any = []

  onNewsHeader(){
    this.service.techNewsHeader().subscribe((result)=>{
      console.log(result);
      this.techNewsDisplay = result.articles;

    })

  }

}
