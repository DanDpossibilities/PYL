import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs'; // added to try to hold user and goal id's

import { Registration } from './registration.model';
import { Login } from './login.model';
import { NewGoal } from './newGoal.model';
import { GoalCategory } from './goalCategorySearch.model';
// import { userInfo } from 'os';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  // getPylUser(id: number): Observable<PylUser>{ // added to try to hold user and goal id's
  //   // this._http.add('HttpService: fetched pylUser id = ${id}');
  //   return of (PylUser.find(pylUser => pylUser.id === id));
  // }
  ////////////////////////////////////////////////////////////////////////////
  //login methods here
  postNewRegistration(first_name: String, last_name: String, email: String, password: String, goals: Array<Object>) {
    const new_registration: Registration = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      goals: []
    };
    return this._http.post('/new_registration', {new_registration});
  }
  postLogin(email: String, password: String){
    const new_login: Login = {
      email: email,
      password: password
    }
    return this._http.post('/login', {new_login});
  }
  updateUserById(user_id: String, first_name: String, last_name: String, email: String, password: String, goals: Array<Object>) {
    const edit_user: Registration = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      goals: []
    };
    return this._http.put(`/updateUser/${user_id}`, {edit_user});
  }
  deleteUserById(user_id: String) {
    console.log("log something here different")
    return this._http.delete(`/registrations/delete/${user_id}`);
  }
  getUserById(user_id: String) {
    return this._http.get(`/show/${user_id}`);
  }

  ////////////////////////////////////////////////////////////////////////////
  //goal methods here
  postNewGoal(user: String, category: String, title: String, due_date: Date, description: String, sub_goals: Array<Object>, completed = Boolean) {
    const new_goal: NewGoal = { user: user,category: category, title: title, due_date: due_date, description: description, sub_goals: sub_goals, completed: false};
    return this._http.post('/goals', {new_goal});
  }
  getGoalByCategory(category: String, user: String) {  // include user Idlater
    return this._http.get(`/goals/category/${category}/${user}`);
  }

  getGoalById(goal_id: String) {
    return this._http.get(`/goals/${goal_id}`);
  }
  getGoals() {
    return this._http.get('/goals');
  }
  updateGoalById(user: String, goal_id: String, title: String, category: String, due_date: Date, description: String, sub_goals: Array<Object>, completed: Boolean) {
    console.log("in update service")
    const updatedGoal: NewGoal = {user: user, title: title, category: category, due_date: due_date, sub_goals: sub_goals, description: description, completed: completed}
    return this._http.patch(`/goals/${goal_id}`, {updatedGoal});
  }
  deleteGoalById(goal_id: string) {
    return this._http.delete(`/goals/${goal_id}`);
  }
}
