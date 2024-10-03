import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {SignupRequest, SignupResponse} from "../auth/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(request: SignupRequest): Observable<SignupResponse> {
    const signUpUrl = `${this.apiUrl}/security/users/signup`;
    return this.http.post(signUpUrl, request)
      .pipe(
        map((response: any) => {
          return response;
        }),
        tap(response => {
          console.log('Creacion exitosa:', response.data);
        }),
        catchError(error => {
          console.error('Response error:', error);
          return throwError(() => error);
        })
      );
  }
}
