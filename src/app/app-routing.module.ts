import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './camera/camera/camera.component';
import { HomeComponent } from './home/home/home.component';
import { NewsComponent } from './news/news/news.component';
import { PhotoComponent } from './photo/photo/photo.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'news', component : NewsComponent},
  {path : 'camera', component : CameraComponent},
  {path : 'photo', component : PhotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
