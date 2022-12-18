import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { CategorySidebarComponent } from './category-sidebar/category-sidebar.component';
import { NewsFromCategoryComponent } from './news-from-category/news-from-category.component';


@NgModule({
  declarations: [NewsComponent, NewsDetailComponent,NewsDetailComponent, CategorySidebarComponent, NewsFromCategoryComponent],
  imports: [
    
    NewsRoutingModule,
    CommonModule,
  ]
})
export class NewsModule { }
