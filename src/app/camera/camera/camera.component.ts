import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LiveCamersService } from 'src/app/shared/apiservice/live-camers.service';
import { LiveCamers } from 'src/app/shared/models/live_camers.models';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {


  form : FormGroup;
  constructor(private Camers:LiveCamersService,) { }

  camers:LiveCamers[]
  country:any
  country_list:LiveCamers[]
  cou:string
  ngOnInit() {
    this.form = new FormGroup({'country': new FormControl(null,[Validators.required])})
    this.Camers.getLiveCamersTop()
      .subscribe((data:any)=>{
        this.camers=data;

        })
    this.Camers.getCountry()
      .subscribe((data)=>{
        this.country=data;
        })

  }
  
 

  onSubmit(){
   this.cou = this.form.value.country
   this.cou
   ?  this.Camers.getCountryList(this.cou)
        .subscribe((data:any)=>{
          this.country_list=data;
         })
      
   :  null
  
  }

}
