import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currentGoal',
  templateUrl: './currentGoal.component.html',
  styleUrls: ['./currentGoal.component.css']
})
export class CurrentGoalComponent {
  pylUser = sessionStorage.getItem('pylUser');
  constructor() { }


}
