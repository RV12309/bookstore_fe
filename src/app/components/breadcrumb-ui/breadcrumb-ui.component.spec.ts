import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbUiComponent } from './breadcrumb-ui.component';

describe('BreadcrumbUiComponent', () => {
  let component: BreadcrumbUiComponent;
  let fixture: ComponentFixture<BreadcrumbUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbUiComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
