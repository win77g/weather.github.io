import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BanerService {

  constructor(private http:HttpClient,) { }

url = environment.api_base
// поучаем baner
  getBaner(){
       return this.http.get(this.url+`/baner/`)
    }
}
