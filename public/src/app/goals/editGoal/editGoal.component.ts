import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

@Component({
  selector: 'app-editGoal',
  templateUrl: './editGoal.component.html',
  styleUrls: ['./editGoal.component.css']
})
export class EditGoalComponent {
  isLoading = false;
  goalForSub = '5cbf7598ab06385c509cdb0e'; // set to string and when routing for sub goals clear after input
  pylUser = sessionStorage.getItem('pylUser');
  goal = ""; // req.params.goal? look at route or console log
  problems = [];
  goalData = {};
  goalComplete = false;
  constructor(public httpService: HttpService, private route: ActivatedRoute, private datePipe: DatePipe, private router: Router) {}

  // private location: Location, removed from constructor
  ngOnInit(){
    // goal = this.route.params
    // (+) converts string 'id' to a number
    console.log(this.route.snapshot.paramMap.get('goalId'));
    this.goal = this.route.snapshot.paramMap.get('goalId');
    this.showGoalById();

  }

  showGoalById() {
    const tempObservable = this.httpService.getGoalById(this.goal);
    tempObservable.subscribe((data: any) => {
      console.log(data);
      if (data.errors) {
        for(var key in data.errors) {
          this.problems.push(data.errors[key].message);
        }
      }
      this.goalData = data;
      this.goalData["due_date"] = this.datePipe.transform(data.due_date, 'yyyy-MM-dd');
      // console.log(this.datePipe.transform(data.due_date, 'yyyy-MM-dd'));
      // this.dateDue = this.datePipe.transform(data.due_date, 'yyyy-MM-dd');
      this.goalComplete = data.completed;
    }, (err) => {
      for(var key in err.error) {
        this.problems.push(err.error[key]);
      }
      console.log(this.problems);
    });
    console.log(this.problems);
  }
/////////////////////////////////////////////////////////////////////////////
  onEditGoal() {
    console.log("--------------")
    console.log(this.goalData);
    let tempObservable = this.httpService.updateGoalById(this.pylUser,
                                                    this.goalData["_id"],
                                                    this.goalData["title"],
                                                    this.goalData["category"],
                                                    this.goalData["due_date"],
                                                    this.goalData["description"],
                                                    [],
                                                    this.goalData["completed"]);
    tempObservable.subscribe((data: any) => {
      console.log('Updated a goal!', data);
      console.log(data.errors);
      if (data.errors) {
        for(var key in data.errors) {
          this.problems.push(data.errors[key].message);
        }
      }
      this.goal = data;
    }, (err) => {
      for(var key in err.error) {
        this.problems.push(err.error[key]);
      }
      console.log(this.problems);
    });
    console.log(this.problems);
    // form.resetForm();
    this.router.navigate(['/home']);
  }
/////////////////////////////////////////////////////////////////////////////
  onDeleteGoal(goal) {
  let tempObservable = this.httpService.deleteGoalById(this.goal);
  tempObservable.subscribe((data: any) => {
    console.log('Deleted a goal!', data);
    console.log(data.errors);
    if (data.errors) {
      for(var key in data.errors) {
        this.problems.push(data.errors[key].message);
      }
    }
    this.goal = data;
  }, (err) => {
    for(var key in err.error) {
      this.problems.push(err.error[key]);
    }
    console.log(this.problems);
  });
  console.log(this.problems);
  // form.resetForm();
  this.router.navigate(['/home']);
  }
}
