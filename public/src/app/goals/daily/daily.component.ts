import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent {
  isLoading = true;
  pylUser = sessionStorage.getItem('pylUser');
  errors = [];
  goals = [];
  constructor(public httpService: HttpService) {
    this.getGoals();
  }

  // ngOnInit() {}

  getGoals() {
    const tempObservable = this.httpService.getGoalByCategory(`daily`, this.pylUser);  // include user Idlater
    tempObservable.subscribe((goal: any) => {
      console.log('Logged our goal!', goal);
      this.goals = goal;
      this.isLoading = false;
    }, (err) => {
      for ( const key of err.error) {
        this.errors.push(err.error[key]);
      }
    });
  }
}
