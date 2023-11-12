import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateUiComponent } from './date-ui.component';

describe('DateUiComponent', () => {
  let component: DateUiComponent;
  let fixture: ComponentFixture<DateUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateUiComponent]
    });
    fixture = TestBed.createComponent(DateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
