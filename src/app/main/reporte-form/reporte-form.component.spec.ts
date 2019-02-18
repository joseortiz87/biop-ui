import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFormComponent } from './reporte-form.component';

describe('ReporteFormComponent', () => {
  let component: ReporteFormComponent;
  let fixture: ComponentFixture<ReporteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
