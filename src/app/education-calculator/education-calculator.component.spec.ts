import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCalculatorComponent } from './education-calculator.component';

describe('EducationCalculatorComponent', () => {
  let component: EducationCalculatorComponent;
  let fixture: ComponentFixture<EducationCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
