import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LiveCameraHomeComponent } from './live-camera-home/live-camera-home.component';
import { SafePipe } from './date.pipe';


@NgModule({
  declarations: [HomeComponent,LiveCameraHomeComponent,SafePipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
