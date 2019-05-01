import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  isLoading = false;
  pylUser = sessionStorage.getItem('pylUser');
  problems = [];
  constructor(public httpService: HttpService){}
    onDeleteUser() {
      let tempObservable = this.httpService.deleteUserById(this.pylUser);
      tempObservable.subscribe((data: any) => {
        console.log('Deleted our User!', data);
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
