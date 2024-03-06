import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedchartComponent } from './completedchart.component';

describe('CompletedchartComponent', () => {
  let component: CompletedchartComponent;
  let fixture: ComponentFixture<CompletedchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
