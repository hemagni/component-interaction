import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../hero';
import { from } from 'rxjs';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  heroes: Array<Hero> = HEROES;
  master: string = "Master";
  
  constructor() { }

  ngOnInit(): void {
  }

}
