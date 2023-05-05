import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierOverviewComponent } from './dossier-overview.component';

describe('DossierOverviewComponent', () => {
  let component: DossierOverviewComponent;
  let fixture: ComponentFixture<DossierOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
