import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WORSComponent } from './wors.component';

describe('WORSComponent', () => {
  let component: WORSComponent;
  let fixture: ComponentFixture<WORSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WORSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WORSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
