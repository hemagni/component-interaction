import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {

  @Input() major: number;
  @Input() minor: number;
  changeLog: Array<string> = [];

  

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    const log: Array<string> = [];
    console.log("Changes " + JSON.stringify(changes));
    for(const propName in changes) {
      console.log(propName)
      const changedProp = changes[propName];
      console.log("changed Property"+JSON.stringify(changedProp));
      const to = JSON.stringify(changedProp.currentValue);
      if(changedProp.isFirstChange()) {
        log.push(`Initial value of "${propName}" set to "${to}"`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`"${propName}" changed from "${from}" to "${to}"`);
      }
    }
    this.changeLog.push(log.join(",-"));
  }
}
