import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetallesComponent } from './card-detalles.component';

describe('CardDetallesComponent', () => {
  let component: CardDetallesComponent;
  let fixture: ComponentFixture<CardDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
