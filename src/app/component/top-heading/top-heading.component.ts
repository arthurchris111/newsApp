// import { newsApiService } from './../../../service/newsApiService';
import { Component, OnInit } from '@angular/core';
import { newsApiService } from 'src/service/newsApiService';
@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(service:newsApiService) { }

  ngOnInit(): void {
    // this.topHeading()

    // this.service.topHeading().subscribe((result: any)=>{
    //   console.log(result);
    // })
  }



}
