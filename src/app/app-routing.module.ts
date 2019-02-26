import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './blog/blog.module#BlogModule'
    },
    {
        path: 'admin',
        //canActivate: [AuthGuardService],
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
