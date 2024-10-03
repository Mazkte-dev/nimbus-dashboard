import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatFabButton,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
