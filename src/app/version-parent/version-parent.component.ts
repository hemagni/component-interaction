import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  templateUrl: './version-parent.component.html',
  styleUrls: ['./version-parent.component.css']
})
export class VersionParentComponent implements OnInit {

  major: number = 1;
  minor: number = 23;

  constructor() { }

  ngOnInit(): void {
  }

  newMajor() {
    
    this.major++;
    this.minor = 0;
  }

  newMinor() {

    this.minor++;
  }
}
