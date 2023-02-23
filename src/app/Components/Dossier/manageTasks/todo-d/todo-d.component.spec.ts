import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDComponent } from './todo-d.component';

describe('TodoDComponent', () => {
  let component: TodoDComponent;
  let fixture: ComponentFixture<TodoDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
