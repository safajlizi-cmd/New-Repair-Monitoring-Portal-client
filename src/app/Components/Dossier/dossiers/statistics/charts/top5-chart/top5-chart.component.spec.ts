import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5ChartComponent } from './top5-chart.component';

describe('Top5ChartComponent', () => {
  let component: Top5ChartComponent;
  let fixture: ComponentFixture<Top5ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5ChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top5ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
