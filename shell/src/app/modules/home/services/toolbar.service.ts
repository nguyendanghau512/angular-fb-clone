import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/app/shared/services/http-api.service';

@Injectable()
export class ToolbarService {

  constructor(private readonly HttpApiService: HttpApiService) { }

  getToolbarItems() {
    return this.HttpApiService.get('assets/mock-data/toolbar.json');
  }
}
