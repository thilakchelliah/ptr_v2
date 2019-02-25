import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {AuthenticationService} from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService {

  constructor() { }
}
