import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newGoal',
  templateUrl: './newGoal.component.html',
  styleUrls: ['./newGoal.component.css']
})
export class NewGoalComponent { // removed implements OnInit
  isLoading = false;
  goal = '';
  pylUser = sessionStorage.getItem('pylUser');
  problems = [];
  constructor(public httpService: HttpService, private router: Router) {}
    onGoal(form: NgForm) {
      console.log(form);
      if (form.invalid) {
        return;
      }
    let tempObservable = this.httpService.postNewGoal(this.pylUser,
                                                    form.value.category,
                                                    form.value.title,
                                                    form.value.due_date,
                                                    form.value.description,
                                                    []);
    console.log(form);
    tempObservable.subscribe((data: any) => {
      console.log('Made a goal!', data);
      console.log(data.errors)
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
    form.resetForm();
    this.router.navigate(['/home']);
  }
}
