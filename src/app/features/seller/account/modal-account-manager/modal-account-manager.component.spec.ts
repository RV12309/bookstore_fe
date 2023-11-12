import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccountManagerComponent } from './modal-account-manager.component';

describe('ModalAccountManagerComponent', () => {
  let component: ModalAccountManagerComponent;
  let fixture: ComponentFixture<ModalAccountManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAccountManagerComponent]
    });
    fixture = TestBed.createComponent(ModalAccountManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
