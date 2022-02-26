import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UIModule } from 'src/app/shared/ui-module/ui.module';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UIModule
  ]
})
export class HomeModule { }
