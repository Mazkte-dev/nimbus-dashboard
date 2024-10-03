import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import {AuthenticationRequest, AuthenticationResponse} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: AuthenticationRequest): Observable<AuthenticationResponse> {
    const loginUrl = `${this.apiUrl}/security/auth/login`;
    return this.http.post(loginUrl, credentials)
      .pipe(
        map((response: any) => {
          return response;
        }),
        tap(response => {

          console.log('Autenticación exitosa:', response);

          localStorage.setItem('accessToken', response.data.token);
        }),
        catchError(error => {
          // Manejar el error de autenticación
          console.error('Error de autenticación:', error);
          return throwError(() => error);
        })
      );
  }
}
