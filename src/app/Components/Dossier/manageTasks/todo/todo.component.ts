import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionsLayout, Orientation } from '@progress/kendo-angular-layout';
import { GenericService } from 'src/app/services/generic.service';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(private api: GenericService, private apiTask: TaskService) { }

  todo: any = [];
  inprogress: any = [];
  done: any = [];
  public actionsOrientation: Orientation = "horizontal";
  public actionsLayout: ActionsLayout = "end";
  updateStatus(id :any ,status :any){
    this.apiTask.UpdateTaskStatus(id,status).subscribe({
      next: (res) => {
        alert("done")
      },
      error: (err) => {
        alert("not done")

      },
    });
  }
  drop(event: CdkDragDrop<any[]>) {
    let newStatus = '';

    switch (event.container.id) {
      case 'cdk-drop-list-0':
        newStatus = 'todo';
        break;
      case 'cdk-drop-list-1':
        newStatus = 'inprog';
        break;
      case 'cdk-drop-list-2':
        newStatus = 'done';
        break;
      default:
        break;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      alert(event.item.data!.id)
      alert(newStatus)

        this.updateStatus( event.item.data!.id ,newStatus)
    }
 
  }
  onDelete(i: any) {
    alert(i)
    alert('delete Task');
  }
  onUpdate(i: any) {
    alert(i)
    alert('delete Task');
  }
  getTaskByStauts(status: any) {
    this.apiTask.getListByStatus(status).subscribe({
      next: (res) => {
        if (status == "inprog") { this.inprogress = res;  }
        else if (status == "todo"){ this.todo = res;   }
        else if (status == "done") {  this.done = res;}
        console.log(res);
      },
      error: (err) => {
      },
    });
  }
  ngOnInit(): void {
    this.getTaskByStauts("inprog");
    this.getTaskByStauts("todo");
    this.getTaskByStauts("done");

  }
}
