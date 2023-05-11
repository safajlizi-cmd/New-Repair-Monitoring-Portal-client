import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowestDossierComponent } from './lowest-dossier.component';

describe('LowestDossierComponent', () => {
  let component: LowestDossierComponent;
  let fixture: ComponentFixture<LowestDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowestDossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowestDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
