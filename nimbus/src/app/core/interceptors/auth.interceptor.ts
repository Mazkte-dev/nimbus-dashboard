import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 1. Get the token from local storage or your preferred storage mechanism
    const token = localStorage.getItem('accessToken'); // Adjust key if needed

    console.log('interceptors : ' + token);

    // 2. Clone the request and add the Authorization header if a token exists
    if (token) {
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
      return next.handle(clonedReq);
    } else {
      // 3. If there's no token, proceed with the original request
      console.log('there no token, proceed with the original request : ' + token);
      return next.handle(req);
    }
  }
}
