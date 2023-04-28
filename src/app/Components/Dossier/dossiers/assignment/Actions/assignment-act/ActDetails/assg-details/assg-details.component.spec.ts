import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssgDetailsComponent } from './assg-details.component';

describe('AssgDetailsComponent', () => {
  let component: AssgDetailsComponent;
  let fixture: ComponentFixture<AssgDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssgDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
