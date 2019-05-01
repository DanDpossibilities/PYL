import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  messages = {registration: []};
  pylUser = sessionStorage.getItem('pylUser');
  errors = [];

  constructor(public httpService: HttpService, private router: Router){}
    onAddUser(form: NgForm) {
      if (form.invalid) {
        return;
      }
    let tempObservable = this.httpService.postNewRegistration(form.value.first_name,
                                          form.value.last_name,
                                          form.value.email,
                                          form.value.password,
                                          [{}]);
    tempObservable.subscribe((data: any) => {
      sessionStorage.setItem('pylUser', data.result._id)
      console.log(sessionStorage.getItem('pylUser'), "sessionstorage pylUser")
      console.log('Posted our User!', data);
      console.log('Posted our User!', data.result._id);
      this.pylUser = data.result._id;
      this.errors = [];
      this.router.navigate(['/home']);
    },(err) => {
      console.log(err.error.message)
      for(var key in err.error) {
        console.log(key)
        //this.errors.push(err.error[key].message);
        this.errors.push(err.error[key]);
      }
    });
    form.resetForm();
  }
}

