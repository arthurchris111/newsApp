import { Component, OnInit } from '@angular/core';
import { newsApiService } from 'src/service/newsApiService';


@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  businessNewsHeaderDisplay:any =[]

  constructor(private service:newsApiService) {

   }

  ngOnInit(): void {
    this.onBusinessNewsHeader()
  }

  onBusinessNewsHeader(){
    this.service.businessNewsHeader().subscribe((result)=>{
      console.log(result);
      this.businessNewsHeaderDisplay = result.articles;

    })
  }
}
