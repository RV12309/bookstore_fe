import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingUiComponent } from './rating-ui.component';

describe('RatingUiComponent', () => {
  let component: RatingUiComponent;
  let fixture: ComponentFixture<RatingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
