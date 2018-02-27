import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCompComponent } from './super-comp.component';

describe('SuperCompComponent', () => {
  let component: SuperCompComponent;
  let fixture: ComponentFixture<SuperCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
