import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { NewfeedComponent } from './pages/newfeed/newfeed.component';
import { FeatureHeaderComponent } from './components/header/feature-header/feature-header.component';


@NgModule({
  declarations: [
    NewfeedComponent,
    FeatureHeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
