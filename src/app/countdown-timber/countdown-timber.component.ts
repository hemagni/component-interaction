import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timber',
  //templateUrl: './countdown-timber.component.html',
  template: '<p> {{message}} </p>',
  styleUrls: ['./countdown-timber.component.css']
})
export class CountdownTimberComponent implements OnInit, OnDestroy {

  intervalId: number = 0;
  message: string = "";
  seconds: number = 11;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(()=>{
      this.seconds -= 1;
      if(this.seconds === 0) {
        this.message = "Blast Off";
      } else {
        if(this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    },1000);
  }
}
