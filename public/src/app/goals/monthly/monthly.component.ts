import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent {
  isLoading = true;
  pylUser = sessionStorage.getItem('pylUser');
  errors = [];
  goals = [];
  constructor(public httpService: HttpService) {
    this.getGoals();
  }

  // ngOnInit() {}

  getGoals() {
    const tempObservable = this.httpService.getGoalByCategory(`monthly`, this.pylUser);  // include user Idlater
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
