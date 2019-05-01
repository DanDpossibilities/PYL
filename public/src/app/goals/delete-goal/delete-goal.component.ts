import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-goal',
  templateUrl: './delete-goal.component.html',
  styleUrls: ['./delete-goal.component.css']
})
export class DeleteGoalComponent {
  isLoading = false;
  // goalForSub = '5cbf7598ab06385c509cdb0e'; // set to string and when routing for sub goals clear after input
  pylUser = sessionStorage.getItem('pylUser');
  goal = "";
  problems = [];
  constructor(public httpService: HttpService, private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(){
    // goal = this.route.params
    // (+) converts string 'id' to a number
    console.log(this.route.snapshot.paramMap.get('goalId'));
    this.goal = this.route.snapshot.paramMap.get('goalId');
  }
  onDeleteGoal() {
    let tempObservable = this.httpService.deleteGoalById(this.goal);
    tempObservable.subscribe((data: any) => {
      console.log('Deleted our Goal!', data);
      sessionStorage.clear();
      this.problems = [];
    }, (err) => {
      console.log(err.error.message);
      for(var key in err.error) {
        this.problems.push(err.error[key]);
      }
    });
  }
}

