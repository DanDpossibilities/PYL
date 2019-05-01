import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login', // not needed if we do through routing only
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false;
  pylUser = sessionStorage.getItem('pylUser');
  problems = [];
  constructor(public httpService: HttpService, private router: Router) {
  }
    onNewLogin(form: NgForm) {
      if (form.invalid) {
        return;
      }
    let tempObservable = this.httpService.postLogin(form.value.email, form.value.password);
    tempObservable.subscribe((user: any) => {
      console.log('Logged our User!', user);
      sessionStorage.setItem('pylUser', user.user)
      console.log(sessionStorage.getItem('pylUser'), "sessionstorage pylUser")
      this.router.navigate(['/home']);
    },(err) => {
      for(var key in err.error) {
        this.problems.push(err.error[key]);
      }
    });
    form.resetForm();
  }
}

