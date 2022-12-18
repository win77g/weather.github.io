import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BanerService } from 'src/app/shared/apiservice/baner.service';
import { WeatherService } from 'src/app/shared/apiservice/weather.service';
import { Baner } from 'src/app/shared/models/baner.models';
import { Json_city } from 'src/app/shared/models/json_city.models';
import * as moment from 'moment';
import Swal from 'sweetalert2';
// import { Json_city } from '../shared/models/json_city.models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form : FormGroup;
  baner : Baner[];
  // city_json:any = citys

  date = moment()
  date_1 = moment(this.date).add(1, 'days').format('ddd MM/DD');
  date_2 = moment(this.date).add(2, 'days').format('ddd MM/DD');
  date_3 = moment(this.date).add(3, 'days').format('ddd MM/DD');
  date_4 = moment(this.date).add(4, 'days').format('ddd MM/DD');
  date_5 = moment(this.date).add(5, 'days').format('ddd MM/DD');
  date_6 = moment(this.date).add(6, 'days').format('ddd MM/DD');
    data:Json_city[]
    id:number;
    weather:any[];
    bbbb:any;
    city:string
    temp:number
    icon:string
    wind_speed:number
    wind_deg:number
    humidity:number
    weather_1_temp_max:number
    weather_1_temp_min:number
    weather_1_icon:string
    weather_2_temp_max:number
    weather_2_temp_min:number
    weather_2_icon:string
    weather_3_temp_max:number
    weather_3_temp_min:number
    weather_3_icon:string
    weather_4_temp_max:number
    weather_4_temp_min:number
    weather_4_icon:string
    weather_5_temp_max:number
    weather_5_temp_min:number
    weather_5_icon:string
    weather_6_temp_max:number
    weather_6_temp_min:number
    weather_6_icon:string
    qwe:any

  constructor(private Baners:BanerService, private Wether:WeatherService,private http:HttpClient) { }
  
  ngOnInit(): void {

    this.http.get('/assets/city.json').subscribe(res =>{
      this.bbbb = res
    }) 

    this.form = new FormGroup({
      'city': new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(3)]),
                            })
        this.Baners.getBaner()
          .subscribe((data:any)=>{
            console.log(data)
            this.baner=data;
            })

            
  }
  onSubmit(){
     
    const {city} = this.form.value;

    const nameCapitalized = city.charAt(0).toUpperCase() + city.slice(1)

    this.data = this.bbbb.filter((c:any) => c.name === nameCapitalized);
    console.log(this.data)
      if(this.data.length === 0){
        Swal.fire({
          icon: 'error',
          title: 'Sorry locality not found',
          showConfirmButton: false,
          timer: 2500
          
        }),
        this.form.reset()}
      else{this.id = this.data[0]['id'],console.log(this.id)}

      this.Wether.getWeather(this.id).subscribe((data:any)=>{
                  console.log(data)
                  this.weather=data
                  this.qwe = data
                  this.weather=data['list'][1]
                  this.city=data['city']['name']
                  this.temp=data['list'][1]['main']['temp']
                  this.humidity=data['list'][1]['main']['humidity']
                  this.icon=data['list'][1]['weather'][0]['icon']
                  this.wind_speed=data['list'][1]['wind']['speed']
                  this.wind_deg=data['list'][1]['wind']['deg']
                  this.weather_1_temp_max=data['list'][1]['main']['temp_max']
                  this.weather_1_temp_min=data['list'][1]['main']['temp_min']
                  this.weather_1_icon=data['list'][1]['weather'][0]['icon']
                  this.weather_2_temp_max=data['list'][2]['main']['temp_max']
                  this.weather_2_temp_min=data['list'][2]['main']['temp_min']
                  this.weather_2_icon=data['list'][2]['weather'][0]['icon']
                  this.weather_3_temp_max=data['list'][3]['main']['temp_max']
                  this.weather_3_temp_min=data['list'][3]['main']['temp_min']
                  this.weather_3_icon=data['list'][3]['weather'][0]['icon']
                  this.weather_4_temp_max=data['list'][4]['main']['temp_max']
                  this.weather_4_temp_min=data['list'][4]['main']['temp_min']
                  this.weather_4_icon=data['list'][4]['weather'][0]['icon']
                  this.weather_5_temp_max=data['list'][5]['main']['temp_max']
                  this.weather_5_temp_min=data['list'][5]['main']['temp_min']
                  this.weather_5_icon=data['list'][5]['weather'][0]['icon']
                  this.weather_6_temp_max=data['list'][6]['main']['temp_max']
                  this.weather_6_temp_min=data['list'][6]['main']['temp_min']
                  this.weather_6_icon=data['list'][6]['weather'][0]['icon']
                  
                 })
  }

}
