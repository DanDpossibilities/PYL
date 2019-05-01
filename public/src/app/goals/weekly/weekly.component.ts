import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent {
  isLoading = true;
  pylUser = sessionStorage.getItem('pylUser');
  errors = [];
  goals = [];
  problems = [];
  constructor(public httpService: HttpService) {
    this.getGoals();
  }

  // ngOnInit() {}

  getGoals() {
    const tempObservable = this.httpService.getGoalByCategory(`weekly`, this.pylUser);  // include user Idlater
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

  // onDeleteGoal() {
  //   let tempObservable = this.httpService.deleteGoalById(goalId);
  //   tempObservable.subscribe((data: any) => {
  //     console.log('Deleted our Goal!', data);
  //     sessionStorage.clear();
  //     this.problems = [];
  //   }, (err) => {
  //     console.log(err.error.message);
  //     for(var key in err.error) {
  //       this.problems.push(err.error[key]);
  //     }
  //   });
  // }
}
