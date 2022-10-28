import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoProfileComponent } from './curso-profile.component';

describe('CursoProfileComponent', () => {
  let component: CursoProfileComponent;
  let fixture: ComponentFixture<CursoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
