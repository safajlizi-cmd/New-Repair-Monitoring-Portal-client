import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentActComponent } from './assignment-act.component';

describe('AssignmentActComponent', () => {
  let component: AssignmentActComponent;
  let fixture: ComponentFixture<AssignmentActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
