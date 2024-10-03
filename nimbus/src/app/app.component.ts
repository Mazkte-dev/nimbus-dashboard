import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {HeaderComponent} from "./shared/components/header/header.component";
import {LoginComponent} from "./features/authentication/login/login.component";
import {SignupComponent} from "./features/authentication/signup/signup.component";
import {TasksComponent} from "./features/tasks/tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavContainer, MatNavList, MatToolbar, MatIcon, MatMenuTrigger, MatMenu, SidebarComponent, HeaderComponent, LoginComponent, SignupComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'nimbus';
}
