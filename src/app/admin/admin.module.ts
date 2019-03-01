import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module'

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import {ApiInterceptorService} from './interceptor/api-interceptor.service';
import { BlogManagerComponent } from './widgets/blog-manager/blog-manager.component';
import { TutManagerComponent } from './widgets/tut-manager/tut-manager.component';
import { UserManagerComponent } from './widgets/user-manager/user-manager.component';

@NgModule({
  declarations: [AdminComponent, LoginComponent, BlogManagerComponent, TutManagerComponent, UserManagerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    }
  ]
})
export class AdminModule { }
