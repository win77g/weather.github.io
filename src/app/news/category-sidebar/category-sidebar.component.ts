import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/apiservice/news.service';
import { CategoryNews } from 'src/app/shared/models/news.models';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css']
})
export class CategorySidebarComponent implements OnInit {

  constructor(private Cetegory:NewsService) { }

  category_list:CategoryNews[]

  ngOnInit() {
      this.Cetegory.getCategoryNews()
      .subscribe((data:any)=>{
        this.category_list=data;

        })
   }

}
