import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemImageComponent } from './item-image/item-image.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ItemImageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ItemImageComponent
  ]
})
export class UIModule { }
