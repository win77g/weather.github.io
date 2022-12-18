import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveCamersService {

  constructor(private http:HttpClient,) { }

url = environment.api_base
// поучаем camers whit top
  getLiveCamersTop(){
         return this.http.get(this.url+`/live_camers/?top=true`)
      }
//получаем список стран в селект
  getCountry(){
         return this.http.get(this.url+`/country/?`)
      }
//получаем страны после выбора селектора      
  getCountryList(country:string){
         return this.http.get(this.url+`/live_camers_country/?country=`+country)
      }
}
