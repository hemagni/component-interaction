import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css'],
  providers: [ MissionService ]
})
export class MissionControlComponent implements OnInit {

  astronauts: Array<string> = ["vijay", "renu", "hemagni"];
  history: Array<string> = [];
  missions: Array<string> = [
    "Fly to the moon",
    "Fly to the mars",
    "Fly to the vegas"
  ];
  nextMission = 0;

  constructor(private missionService: MissionService) {

    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`Astronaut "${astronaut}" confirmed the mission`);
        setTimeout(()=>this.scrollDown(),0);
      }
    );
   }


  ngOnInit(): void {
    
  }

  announce() {
    
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if(this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
    this.scrollDown();
  }

  scrollDown() {

    let ele = document.getElementById("history-div");
    ele.scrollTop = ele.scrollHeight;
  }
}
