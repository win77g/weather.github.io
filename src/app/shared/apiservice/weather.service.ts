import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient,) { }
  
  url = environment.api_base
// поучаем baner
  getWeather(id:number){
       return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=`+id+`&APPID=a77d51d7a5bf5670d37345a2c4a657e7&units=metric`)
    }
}
