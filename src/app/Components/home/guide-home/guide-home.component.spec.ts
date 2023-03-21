import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideHomeComponent } from './guide-home.component';

describe('GuideHomeComponent', () => {
  let component: GuideHomeComponent;
  let fixture: ComponentFixture<GuideHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
