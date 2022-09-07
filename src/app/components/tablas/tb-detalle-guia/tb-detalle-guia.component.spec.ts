import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbDetalleGuiaComponent } from './tb-detalle-guia.component';

describe('TbDetalleGuiaComponent', () => {
  let component: TbDetalleGuiaComponent;
  let fixture: ComponentFixture<TbDetalleGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbDetalleGuiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbDetalleGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
