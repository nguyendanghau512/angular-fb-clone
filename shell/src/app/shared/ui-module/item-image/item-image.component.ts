import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss']
})
export class ItemImageComponent implements OnInit {
  @Input() item: { code: string; } | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
