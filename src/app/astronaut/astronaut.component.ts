import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit, OnDestroy {

  @Input()
  astronaut: string;
  mission: string = "<No mission announced>";
  confirmed: boolean = false;
  announced: boolean = false;
  subscription: Subscription;


  constructor(private missionService: MissionService) {
    
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    ); 
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
}
