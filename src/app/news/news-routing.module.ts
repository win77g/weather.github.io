import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsFromCategoryComponent } from './news-from-category/news-from-category.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path : '', component : NewsComponent},
  {path:'news/:id', component:NewsDetailComponent},
  {path:'news_from_category/:category', component:NewsFromCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
