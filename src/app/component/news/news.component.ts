import { Component, OnInit } from '@angular/core';
import { newsApiService } from 'src/service/newsApiService';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service:newsApiService) { }

  ngOnInit(): void {
  }

}
