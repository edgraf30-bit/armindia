import { Component, OnInit } from '@angular/core';
import {DbjsonService} from "../../shared/services/dbjson.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-cities-page',
  templateUrl: './cities-page.component.html',
  styleUrls: ['./cities-page.component.scss']
})
export class CitiesPageComponent implements OnInit {

  dataOfItem: any[] = [];
    id;

  constructor(private authService: AuthService, private dbjsonService: DbjsonService) { }

  ngOnInit() {

    this.dbjsonService.getDb1().subscribe((data: any)=>{
        this.dataOfItem = (data);
    });
  }
  startDelete(data) {
    this.dbjsonService.deleteRow(data).subscribe(()=>{
      this.dataOfItem = this.dataOfItem.filter( (d) => d.id !=data.id);
    })
  };


  }


