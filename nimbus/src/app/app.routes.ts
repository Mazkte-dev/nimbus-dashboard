import { Routes } from '@angular/router';
import {LoginComponent} from "./features/authentication/login/login.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import { AuthGuard } from './core/auth/auth.guard';
import {SignupComponent} from "./features/users/signup/signup.component"; // We'll create this guard next

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },// Redirect to login by default
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] // Protect the dashboard route
  },
];
