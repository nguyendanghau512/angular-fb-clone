import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToolbarService } from '../../services/toolbar.service';
import { ItemListModel } from '../../../../shared/model/item-list.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  itemList!: Observable<ItemListModel[]>;
  constructor(
    private readonly toolbarService: ToolbarService) {
  }

  ngOnInit(): void {
    this.itemList = this.toolbarService.getToolbarItems();
  }

}
