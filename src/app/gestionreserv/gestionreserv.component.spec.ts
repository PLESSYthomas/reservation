import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionreservComponent } from './gestionreserv.component';

describe('GestionreservComponent', () => {
  let component: GestionreservComponent;
  let fixture: ComponentFixture<GestionreservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionreservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionreservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
