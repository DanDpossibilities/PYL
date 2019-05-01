import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
//import { Router, ActivatedRoute} from '@angular/router';
// import { AuthService } from './auth.service';

import { MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatCheckboxModule,
  MAT_CHECKBOX_CLICK_ACTION,
  // MatPaginatorModule
} from '@angular/material';

import { RegistrationComponent } from './users/registration/registration.component';
import { LoginComponent } from './users/login/login.component';
import { PYL_aboutComponent } from './PYL_about/PYL_about.component';
import { DailyComponent } from './goals/daily/daily.component';
import { WeeklyComponent } from './goals/weekly/weekly.component';
import { MonthlyComponent } from './goals/monthly/monthly.component';
import { LongTermComponent } from './goals/longTerm/longTerm.component';
import { SearchTreeComponent } from './goals/searchTree/searchTree.component';
import { NewGoalComponent } from './goals/newGoal/newGoal.component';
import { HeaderComponent } from './header/header.component';
import { EditGoalComponent } from './goals/editGoal/editGoal.component';
import { CurrentGoalComponent } from './goals/currentGoal/currentGoal.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { DeleteGoalComponent } from './goals/delete-goal/delete-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    PYL_aboutComponent,
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
    LongTermComponent,
    SearchTreeComponent,
    NewGoalComponent,
    HeaderComponent,
    EditGoalComponent,
    CurrentGoalComponent,
    HomeComponent,
    EditUserComponent,
    DeleteUserComponent,
    DeleteGoalComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCheckboxModule,
    // ActivatedRoute,
    // Router,
    //MatPaginatorModule
  ],
  providers: [HttpService, DatePipe], //, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
