import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {


  constructor(private auth: AuthenticationService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = localStorage.getItem('currentUser');

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Token ' + authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        // this.auth.
        localStorage.setItem('currentUser', null);
        this.router.navigate(['/admin/login']);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}


