import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimberComponent } from './countdown-timber.component';

describe('CountdownTimberComponent', () => {
  let component: CountdownTimberComponent;
  let fixture: ComponentFixture<CountdownTimberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
