import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosHistoryComponent } from './dos-history.component';

describe('DosHistoryComponent', () => {
  let component: DosHistoryComponent;
  let fixture: ComponentFixture<DosHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
