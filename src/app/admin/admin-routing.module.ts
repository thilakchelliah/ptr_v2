import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
   {
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
		{
		path: 'login',
		component: LoginComponent
	
	},
	{
		path: 'dashboard',
		component: AdminComponent,
		canActivate: [AuthGuard]
	
	}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
