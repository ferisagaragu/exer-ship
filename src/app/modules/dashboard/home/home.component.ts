import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../core/http/team.service';
import { TeamModel } from '../../../core/model/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  team: TeamModel;
  toDay: number;

  constructor(private teamService: TeamService) { 
    this.toDay = new Date().getUTCDay();
  }

  ngOnInit(): void {
    this.teamService.findByUserUid().subscribe(
      resp => {
        this.team = resp;
      }, error => {
        console.log(error);
      }
    );
  }

}
