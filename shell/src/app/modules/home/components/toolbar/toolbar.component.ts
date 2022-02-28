import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  itemList!: Observable<ArrayBuffer>;
  constructor(
    private readonly toolbarService: ToolbarService) {
  }

  ngOnInit(): void {
    this.itemList = this.toolbarService.getToolbarItems();
  }

}
