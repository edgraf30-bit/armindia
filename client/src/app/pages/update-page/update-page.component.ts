import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DbjsonService} from "../../shared/services/dbjson.service";

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent implements OnInit {

  id;
  title;
  description;
  text;

  constructor(private route: ActivatedRoute, private router: Router, private dbjsonService: DbjsonService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.id = params['id'];
    });
    this.title = this.route.snapshot.queryParams.title;
    this.description = this.route.snapshot.queryParams.description;
    this.text = this.route.snapshot.queryParams.text;
  }
  startEdit() {
    const Update = {
      title: this.title,
      description: this.description,
      text: this.text,
      id: this.id
    };
    this.dbjsonService.updateRow(Update).subscribe((data) => {
      console.log(data);
    });
  }

  addRow() {
    const add = {
      title: this.title,
      description: this.description,
      text: this.text,
      id: this.id
    };
    this.dbjsonService.addCity(add).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/add']);
    });

  }

}
