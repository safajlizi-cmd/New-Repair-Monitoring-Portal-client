import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorTasksComponent } from './collaborator-tasks.component';

describe('CollaboratorTasksComponent', () => {
  let component: CollaboratorTasksComponent;
  let fixture: ComponentFixture<CollaboratorTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
