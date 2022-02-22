import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestviewRoutingModule } from './testview-routing.module';
import { TestviewComponent } from './testview.component';


@NgModule({
  declarations: [
    TestviewComponent
  ],
  imports: [
    CommonModule,
    TestviewRoutingModule
  ]
})
export class TestviewModule { }
