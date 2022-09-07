import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConforCargaComponent } from './confor-carga.component';

describe('ConforCargaComponent', () => {
  let component: ConforCargaComponent;
  let fixture: ComponentFixture<ConforCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConforCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConforCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
