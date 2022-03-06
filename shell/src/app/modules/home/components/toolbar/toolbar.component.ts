import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ToolbarService } from '../../services/toolbar.service';
import { ItemListModel } from '../../../../shared/model/item-list.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit, OnDestroy {
  itemList: ItemListModel[] = [];
  moreList: ItemListModel[] = [];
  seeMore = new ItemListModel({ code: 'seeMore' });
  seeLess = new ItemListModel({ code: 'seeLess' });
  showMore = false;
  private readonly defaultItem = 10;

  get haveNext() {
    return !this.showMore;
  }

  constructor(
    private readonly toolbarService: ToolbarService,
    private readonly cdr: ChangeDetectorRef,
    ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.toolbarService.getToolbarItems(this.defaultItem).subscribe((list) => {
      this.itemList = list;
    })
  }

  loadMore() {
    if (this.moreList.length > 0) {
      this.showMore = true;
      return;
    }
    //Todo: use query param
    this.toolbarService.getToolbarItems(100, this.defaultItem + 1).subscribe((list) => {
      this.moreList = list;
      this.showMore = true;
      this.cdr.markForCheck();
    })
  }

  loadLess() {
    this.showMore = false;
  }
}
