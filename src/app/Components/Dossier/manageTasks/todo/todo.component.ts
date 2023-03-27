import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionsLayout, Orientation } from '@progress/kendo-angular-layout';
import { clockIcon } from '@progress/kendo-svg-icons';
import { GenericService } from 'src/app/services/generic.service';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(private api: GenericService, private apiTask: TaskService , private router :Router ,private route :ActivatedRoute) { }
  @ViewChild("anchor", { static: false })
  public anchor: ElementRef<HTMLElement> | undefined;
  todo: any = [];
  public margin = { horizontal: -46, vertical: 7 };
  showPopupIndextodo: number = -1; // default value to hide all popups
  showPopupIndexin: number = -1; // default value to hide all popups
  showPopupIndexdo: number = -1; // default value to hide all popups

  public icons = { trash:clockIcon };

onToggleto(index: number) {
  if (this.showPopupIndextodo === index) {
    // if the same button is clicked again, hide the popup
    this.showPopupIndextodo = -1;
  } else {
    // show the popup for the clicked button only
    this.showPopupIndextodo = index;
  }
}
  onTogglein(index: number) {
    if (this.showPopupIndexin === index) {
      // if the same button is clicked again, hide the popup
      this.showPopupIndexin = -1;
    } else {
      // show the popup for the clicked button only
      this.showPopupIndexin = index;
    }
  }
    onToggledo(index: number) {
      if (this.showPopupIndexdo === index) {
        // if the same button is clicked again, hide the popup
        this.showPopupIndexdo = -1;
      } else {
        // show the popup for the clicked button only
        this.showPopupIndexdo = index;
      }
}
  public show = false;
  inprogress: any = [];
  done: any = [];
  public actionsOrientation: Orientation = "horizontal";
  public actionsLayout: ActionsLayout = "end";
  updateStatus(id :any ,status :any){
    this.apiTask.UpdateTaskStatus(id,status).subscribe({
      next: (res) => {
      },
      error: (err) => {

      },
    });
  }
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      this.updateStatus( event.item.data!.id ,event.container.id)
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
  details(id:any){
    this.router.navigate(["Details/",id],  {relativeTo: this.route});
  }
  dossierNav(id:any){
    this.router.navigate(['/Dossiers/List/Details', id]);
  }
  onTaskAdded(): void {
    // reload the list of tasks
    this.getTaskByStauts("inprog");
    this.getTaskByStauts("todo");
    this.getTaskByStauts("done");  }
}
