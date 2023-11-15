import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InLoginComponent } from './in-login.component';

describe('InLoginComponent', () => {
  let component: InLoginComponent;
  let fixture: ComponentFixture<InLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InLoginComponent]
    });
    fixture = TestBed.createComponent(InLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
