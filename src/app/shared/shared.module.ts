import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './widgets/grid/grid.component';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent
  ]
})
export class SharedModule { }
