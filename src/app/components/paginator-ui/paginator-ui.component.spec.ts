import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorUiComponent } from './paginator-ui.component';

describe('PaginatorUiComponent', () => {
  let component: PaginatorUiComponent;
  let fixture: ComponentFixture<PaginatorUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorUiComponent]
    });
    fixture = TestBed.createComponent(PaginatorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
