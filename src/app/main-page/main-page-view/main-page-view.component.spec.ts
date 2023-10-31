import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageViewComponent } from './main-page-view.component';

describe('MainPageViewComponent', () => {
  let component: MainPageViewComponent;
  let fixture: ComponentFixture<MainPageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageViewComponent]
    });
    fixture = TestBed.createComponent(MainPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
