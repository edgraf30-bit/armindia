import { Component, OnInit } from '@angular/core';
import {DbjsonService} from "../../shared/services/dbjson.service";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
   listOfTrainings = [];
  constructor(private dbjsonService: DbjsonService) { }

  ngOnInit() {
    this.dbjsonService.getTraining().subscribe((data: any)=>{
      this.listOfTrainings = (data);
    });

  }
  startDelete(data) {
    this.dbjsonService.deleteTraining(data).subscribe(()=>{
      this.listOfTrainings = this.listOfTrainings.filter( (d) => d.id !=data.id);
    })
  };



}
