import { Component, OnInit } from '@angular/core';
import { newsApiService } from 'src/service/newsApiService';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {
  sportsNewsHeaderDisplay:any = []

  constructor(private service:newsApiService) { }

  ngOnInit(): void {
    this.onSportsNews()
  }

  onSportsNews(){
    this.service.sportsNewsHeader().subscribe((result)=>{
      console.log(result);
      this.sportsNewsHeaderDisplay = result.articles
    })
  }

}
