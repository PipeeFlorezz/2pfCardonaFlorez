import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirEstudianteComponent } from './inscribir-estudiante.component';

describe('InscribirEstudianteComponent', () => {
  let component: InscribirEstudianteComponent;
  let fixture: ComponentFixture<InscribirEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscribirEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribirEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
