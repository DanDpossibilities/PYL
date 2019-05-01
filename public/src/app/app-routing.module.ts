import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './users/registration/registration.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { DailyComponent } from './goals/daily/daily.component';
import { WeeklyComponent } from './goals/weekly/weekly.component';
import { MonthlyComponent } from './goals/monthly/monthly.component';
import { LongTermComponent } from './goals/longTerm/longTerm.component';
import { NewGoalComponent } from './goals/newGoal/newGoal.component';
import { SearchTreeComponent } from './goals/searchTree/searchTree.component';
import { PYL_aboutComponent } from './PYL_about/PYL_about.component';
import { CurrentGoalComponent } from './goals/currentGoal/currentGoal.component';
import { EditGoalComponent } from './goals/editGoal/editGoal.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { DeleteGoalComponent } from './goals/delete-goal/delete-goal.component';


const routes: Routes = [
  // decide which path is default ''
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: LoginComponent }, // maybe this one ''
  { path: 'edit_user', component: EditUserComponent },
  { path: 'destroy_user', component: DeleteUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'daily', component: DailyComponent }, // maybe copy all of these for a create, update, and delete.... current is read
  // { path: 'create', component: DailyComponent }, // use for sub-goal?
  { path: 'update/:goalId', component: EditGoalComponent },
  { path: 'delete/:goalId', component: DeleteGoalComponent },
  { path: 'show/:goalId', component: CurrentGoalComponent },
  { path: 'weekly', component: WeeklyComponent },
  { path: 'monthly', component: MonthlyComponent },
  { path: 'longTerm', component: LongTermComponent },
  { path: 'newGoal', component: NewGoalComponent },
  { path: 'searchTree', component: SearchTreeComponent },
  { path: 'pyl_about', component: PYL_aboutComponent },
  { path: 'currentGoal', component: CurrentGoalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
