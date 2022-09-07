import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbGuiasComponent } from './tb-guias.component';

describe('TbGuiasComponent', () => {
  let component: TbGuiasComponent;
  let fixture: ComponentFixture<TbGuiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbGuiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
