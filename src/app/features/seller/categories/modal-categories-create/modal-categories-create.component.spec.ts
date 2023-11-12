import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategoriesCreateComponent } from './modal-categories-create.component';

describe('ModalCategoriesCreateComponent', () => {
  let component: ModalCategoriesCreateComponent;
  let fixture: ComponentFixture<ModalCategoriesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCategoriesCreateComponent]
    });
    fixture = TestBed.createComponent(ModalCategoriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
