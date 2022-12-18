import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/shared/apiservice/news.service';
import { News } from 'src/app/shared/models/news.models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private News:NewsService,private router:Router) { }
  news_list:News[]


  ngOnInit() {

    this.News.getNewsList()
      .subscribe((data:any)=>{
        this.news_list=data;
         console.log(this.news_list)
        })
  }

  news(id:number){
    this.router.navigate(  ['/news'],{queryParams:{id:id}})
  }

}
