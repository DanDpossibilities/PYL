import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGoalComponent } from './currentGoal.component';

describe('CurrentGoalComponent', () => {
  let component: CurrentGoalComponent;
  let fixture: ComponentFixture<CurrentGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
