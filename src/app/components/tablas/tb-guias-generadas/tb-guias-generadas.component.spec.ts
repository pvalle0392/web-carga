import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbGuiasGeneradasComponent } from './tb-guias-generadas.component';

describe('TbGuiasGeneradasComponent', () => {
  let component: TbGuiasGeneradasComponent;
  let fixture: ComponentFixture<TbGuiasGeneradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbGuiasGeneradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbGuiasGeneradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
