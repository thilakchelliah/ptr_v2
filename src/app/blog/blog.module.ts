import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BlogComponent
    ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
