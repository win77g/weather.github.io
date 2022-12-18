import { Component, OnInit } from '@angular/core';
import { LiveCamersService } from 'src/app/shared/apiservice/live-camers.service';
import { LiveCamers } from 'src/app/shared/models/live_camers.models';

@Component({
  selector: 'app-live-camera-home',
  templateUrl: './live-camera-home.component.html',
  styleUrls: ['./live-camera-home.component.css']
})
export class LiveCameraHomeComponent implements OnInit {

  constructor(private Camers:LiveCamersService,) { }

  camers:LiveCamers[]

  ngOnInit() {

    this.Camers.getLiveCamersTop()
      .subscribe((data:any)=>{
        this.camers=data;
      })
  }

}
