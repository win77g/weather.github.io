import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap, Subscription } from 'rxjs';
import { NewsService } from 'src/app/shared/apiservice/news.service';
import { News } from 'src/app/shared/models/news.models';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor(private News:NewsService,private route: ActivatedRoute,) { }
  news_list:News[]
  title:string
  sub1:Subscription;

  ngOnInit() {

    this.sub1 = this.route.params
      .pipe(mergeMap((params:Params)=>this.News.getNewsItem(params['id'])))
      .subscribe((data:any)=>{
          this.news_list=data;
          // console.log(this.news_list)

          this.title = data[0]['name']


          })
  }
  ngOnDestroy(){
      this.sub1.unsubscribe();
  }

}
