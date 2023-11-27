import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaUiComponent } from './galleria-ui.component';

describe('GalleriaUiComponent', () => {
  let component: GalleriaUiComponent;
  let fixture: ComponentFixture<GalleriaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleriaUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleriaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
