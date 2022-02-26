import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemImageComponent } from './item-image/item-image.component';



@NgModule({
  declarations: [
    ItemImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemImageComponent
  ]
})
export class UIModule { }
