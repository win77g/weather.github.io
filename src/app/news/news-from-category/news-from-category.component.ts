import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap, Subscription } from 'rxjs';
import { NewsService } from 'src/app/shared/apiservice/news.service';
import { News } from 'src/app/shared/models/news.models';

@Component({
  selector: 'app-news-from-category',
  templateUrl: './news-from-category.component.html',
  styleUrls: ['./news-from-category.component.css']
})
export class NewsFromCategoryComponent implements OnInit {

  constructor(private News:NewsService,private route: ActivatedRoute,) { }
  news_category_list:News[]
  sub1:Subscription;
  category_list_title:any
  // category_title:any
  ngOnInit() {

    this.sub1 = this.route.params
      .pipe(mergeMap((params:Params)=>this.News.getNewsFromCategory(params['category'])))
      .subscribe((data:any)=>{
          this.news_category_list=data;
          this.category_list_title=data[0]['category']
          




          })
  }

}
