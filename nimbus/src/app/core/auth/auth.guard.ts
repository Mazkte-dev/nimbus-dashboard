import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router ,
              @Inject(PLATFORM_ID) private platformId: any) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Check if the user is authenticated (e.g., check for a token in localStorage)
    const isAuthenticated = !!localStorage.getItem('accessToken'); // Adjust as needed
    console.log("isAuthenticated:" + isAuthenticated)
    if (isAuthenticated) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
  }
}
