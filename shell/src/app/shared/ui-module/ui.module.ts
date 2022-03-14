import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemImageComponent } from './item-image/item-image.component';
import { TranslateModule } from '@ngx-translate/core';
import { SearchFbComponent } from './search-fb/search-fb.component';


@NgModule({
  declarations: [
    ItemImageComponent,
    SearchFbComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ItemImageComponent,
    SearchFbComponent
  ]
})
export class UIModule { }
