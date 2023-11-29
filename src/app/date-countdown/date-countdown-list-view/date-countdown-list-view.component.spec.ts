import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCountdownListViewComponent } from './date-countdown-list-view.component';

describe('DateCountdownListViewComponent', () => {
  let component: DateCountdownListViewComponent;
  let fixture: ComponentFixture<DateCountdownListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateCountdownListViewComponent]
    });
    fixture = TestBed.createComponent(DateCountdownListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
