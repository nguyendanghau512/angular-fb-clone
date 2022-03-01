import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UIModule } from 'src/app/shared/ui-module/ui.module';
import { ToolbarService } from './services/toolbar.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UIModule,
    SharedModule
  ],
  providers: [
    ToolbarService
  ]
})
export class HomeModule { }
