import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newfeed',
  templateUrl: './newfeed.component.html',
  styleUrls: ['./newfeed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewfeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
