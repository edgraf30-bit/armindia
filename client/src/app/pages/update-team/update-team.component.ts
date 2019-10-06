import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DbjsonService} from "../../shared/services/dbjson.service";

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {

  id;
  name;
  prof;
  image;

  constructor(private router: ActivatedRoute, private dbjsonService: DbjsonService) { }

  ngOnInit() {
    this.router.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.id = params['id'];

    });
    this.name = this.router.snapshot.queryParams.name;
    this.prof = this.router.snapshot.queryParams.prof;
    this.image = this.router.snapshot.queryParams.image;

  }
  startEdit() {
    const member ={
      name: this.name,
      prof: this.prof,
      image: this.image,
      id: this.id
    };
    this.dbjsonService.updateTeam(member).subscribe((data) =>{
      console.log(data);
    });
  }
}
