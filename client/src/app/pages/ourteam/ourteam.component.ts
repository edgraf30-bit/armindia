import { Component, OnInit } from '@angular/core';
import {UploadFile} from "ng-zorro-antd";
import {DbjsonService} from "../../shared/services/dbjson.service";

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.scss']
})
export class OurteamComponent implements OnInit {

  ourTeam = [];

  constructor(private dbjsonService: DbjsonService) { }

  ngOnInit() {
    this.dbjsonService.getTeam().subscribe((data: any)=>{
      this.ourTeam = data;
    })

  }

}
