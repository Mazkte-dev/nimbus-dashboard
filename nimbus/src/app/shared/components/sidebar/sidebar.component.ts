import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {MatSidenavContainer} from "@angular/material/sidenav";
import {MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    MatSidenavContainer,
    MatNavList,
    MatIcon,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SidebarComponent {
  hover: string = '';
  menuItems: MenuItem[] = [
    { name: 'Dashboard', route: 'dashboard' },
    { name: 'Tareas', route: 'tasks' },
    { name: 'Usuarios', route: 'users' },
    { name: 'Configuracion', route: 'settings' }
  ];
}
