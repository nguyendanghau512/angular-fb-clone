import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/app/shared/services/http-api.service';
import { API } from '../home.constants';
import { ItemListModel } from '../../../shared/model/item-list.model';
import { map } from 'rxjs';
import { ItemListDTO } from 'src/app/shared/dto/item-list.dto';

@Injectable()
export class ToolbarService {

  constructor(private readonly HttpApiService: HttpApiService<ItemListDTO[]>) { }

  getToolbarItems() {
    return this.HttpApiService.get(API.getToolbarItem).pipe(
      map((response) => response.map((r) => new ItemListModel(r)))
    );
  }
}
