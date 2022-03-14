import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFbComponent } from './search-fb.component';

describe('SearchFbComponent', () => {
  let component: SearchFbComponent;
  let fixture: ComponentFixture<SearchFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
