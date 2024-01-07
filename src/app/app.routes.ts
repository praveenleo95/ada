import { Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'login',component:LoginPageComponent},
    {path:'dashboard',component:DashboardComponent }
];
