import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  isLoading = false;
  pylUser = sessionStorage.getItem('pylUser');
  problems = [];

  constructor(public httpService: HttpService){}
    onEditUser(form: NgForm) {
      if (form.invalid) {
        return;
      }
      let tempObservable = this.httpService.updateUserById(this.pylUser,
                                            form.value.first_name,
                                            form.value.last_name,
                                            form.value.email,
                                            form.value.password,
                                            []);
      tempObservable.subscribe((data: any) => {
        console.log('Updated our User!', data);
        this.pylUser = data.result._id;
        this.problems = [];
      },(err) => {
        console.log(err.error.message);
        for(var key in err.error) {
          this.problems.push(err.error[key]);
        };
    });
    // form.resetForm();
    }

    onDeleteUser() {
      console.log("if it go there")
      let tempObservable = this.httpService.deleteUserById(this.pylUser);
      tempObservable.subscribe((data: any) => {
        console.log('Deleted our User!', data);
        sessionStorage.clear();
        this.problems = [];
      },(err) => {
        console.log(err.error.message);
        for(var key in err.error) {
          this.problems.push(err.error[key]);
        }
      });
    }
}

