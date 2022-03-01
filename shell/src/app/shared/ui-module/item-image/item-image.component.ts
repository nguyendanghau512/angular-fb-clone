import { Component, Input, OnInit } from '@angular/core';
import { ItemListModel } from '../../model/item-list.model';
import { i18nItemImageUI } from '../../shared.constants';

@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss']
})
export class ItemImageComponent implements OnInit {
  @Input() item!: ItemListModel;
  i18n = i18nItemImageUI;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
