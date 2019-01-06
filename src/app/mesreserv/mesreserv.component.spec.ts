import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesreservComponent } from './mesreserv.component';

describe('MesreservComponent', () => {
  let component: MesreservComponent;
  let fixture: ComponentFixture<MesreservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesreservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesreservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
