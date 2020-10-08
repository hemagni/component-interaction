import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.css']
})
export class NameChildComponent implements OnInit {

  heroName: string;
  @Input()
  get name() {
    return this._name;
  }

  
  set name(newName: string) {
    this._name = (newName && newName.trim()) ||  "<no name set>"; 
    this.heroName = this._name;
  }

  private _name: string= "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
