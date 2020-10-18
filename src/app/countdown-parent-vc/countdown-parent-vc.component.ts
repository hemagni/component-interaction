import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CountdownTimberComponent } from '../countdown-timber/countdown-timber.component';

@Component({
  selector: 'app-countdown-parent-vc',
  templateUrl: './countdown-parent-vc.component.html',
  styleUrls: ['../countdown-local-var-parent/countdown-local-var-parent.component.css']
})
export class CountdownParentVcComponent implements OnInit, AfterViewInit {

  @ViewChild(CountdownTimberComponent)
  private timerComponent: CountdownTimberComponent;

  seconds() {
    return 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}
