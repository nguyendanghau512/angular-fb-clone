import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { NewfeedComponent } from './pages/newfeed/newfeed.component';
import { FeatureHeaderComponent } from './components/header/feature-header/feature-header.component';
import { UIModule } from '../shared/ui-module/ui.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    NewfeedComponent,
    FeatureHeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    UIModule,
    TranslateModule
  ]
})
export class LayoutsModule { }
