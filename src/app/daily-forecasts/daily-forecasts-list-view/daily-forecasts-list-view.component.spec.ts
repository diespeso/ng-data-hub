import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastsListViewComponent } from './daily-forecasts-list-view.component';

describe('DailyForecastsListViewComponent', () => {
  let component: DailyForecastsListViewComponent;
  let fixture: ComponentFixture<DailyForecastsListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyForecastsListViewComponent]
    });
    fixture = TestBed.createComponent(DailyForecastsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
