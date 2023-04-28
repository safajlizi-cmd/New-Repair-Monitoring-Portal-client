import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WORActComponent } from './woract.component';

describe('WORActComponent', () => {
  let component: WORActComponent;
  let fixture: ComponentFixture<WORActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WORActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WORActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
