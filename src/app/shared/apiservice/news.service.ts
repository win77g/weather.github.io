import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http:HttpClient,) { }

  url = environment.api_base
// поучаем list news
  getNewsList(){
         return this.http.get(this.url+`/news/`)
      }
// поучаем detal news
  getNewsItem(id:number){
         return this.http.get(this.url+`/news/?id=${id}`)
      }
// поучаем detal news
  getNewsFromCategory(category:string){
          return this.http.get(this.url+`/news_from_category/?category=${category}`)
      }
// поучаем list category
  getCategoryNews(){
          return this.http.get(this.url+`/category_news/`)
      }
}
