import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {

  agreed: number = 0;
  disagreed: number = 0;
  voters: Array<string> = ["Narco","Celeritas","Bombasto"];

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(isAgreed: boolean) {

    isAgreed ? this.agreed++ : this.disagreed++;
  }
}
