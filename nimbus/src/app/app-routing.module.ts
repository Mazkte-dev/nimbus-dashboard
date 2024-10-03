import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./features/authentication/login/login.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {AuthGuard} from "./core/auth/auth.guard";
import {TasksComponent} from "./features/tasks/tasks.component";
import {SignupComponent} from "./features/authentication/signup/signup.component";

export const routes: Routes = [
  { path: '**', redirectTo: '/login'},
  { path: '/login', component: LoginComponent },
  { path: '/signup', component: SignupComponent },
  { path: '/tasks', component: TasksComponent, canActivate: [AuthGuard] },
  {
    path: '/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
