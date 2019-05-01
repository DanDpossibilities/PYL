import { Component, OnInit } from '@angular/core';
// import { PYL_aboutComponent } from '../PYL_about/PYL_about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading = false;
  pylUser = sessionStorage.getItem('pylUser');
  title = 'PYL';
  goals = [];
  constructor() { }

  ngOnInit() {
  }

}
