import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionsLayout, Orientation } from '@progress/kendo-angular-layout';
import { clockIcon, pencilIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';
import { GenericService } from 'src/app/services/generic.service';
import { TaskService } from 'src/app/services/task.service';
import { DialogAnimation, DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialItemClickEvent } from '@progress/kendo-angular-buttons';
import { UserStoreService } from 'src/app/services/user-store.service';@Component({
  selector: 'app-collaborator-tasks',
  templateUrl: './collaborator-tasks.component.html',
  styleUrls: ['./collaborator-tasks.component.css']
})
export class CollaboratorTasksComponent {
//**update task */
id:any
taskId:any
public opened = false;
public opened2 = false;
public animation: boolean | DialogAnimation = {};
public dialogThemeColor: any = "primary";
taskForm!: FormGroup;
assignedTask: any
openedAssign = false
historySearchForm!: FormGroup;
historydateForm!: FormGroup;
@Input() userId!: any;
todo: any = [];
dossiers: any;
public margin = { horizontal: -46, vertical: 7 };
tasks=[{title :'Task 1'},{title :'Task 2'},{title :'Task 3'},{title :'Task 4'},{title :'Task 5'}]
public show = false;
inprogress: any = [];
done: any = [];
public actionsOrientation: Orientation = "horizontal";
public actionsLayout: ActionsLayout = "end";
public icons = { trash: clockIcon };
popupService: any;

constructor(private fb:FormBuilder,private task: TaskService, private auth: UserStoreService, private dialogService: DialogService, private api: GenericService, private apiTask: TaskService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }
getTaskByStautsAndAss(status: any, assign: any) {
  this.apiTask.getListByStatusAndAssy(status, assign).subscribe({
    next: (res) => {
      if (status == "inprog") { this.inprogress = res; }
      else if (status == "todo") { this.todo = res; }
      else if (status == "done") { this.done = res; }
      console.log(res);
    },
    error: (err) => {
    },
  });
}

details(id: any) {
this.taskId = id
this.opened2=true
 // this.router.navigate(["Details/", id], { relativeTo: this.route });
}
dossierNav(id: any) {
  this.router.navigate(['/Dossiers/List/Details', id]);
}
getDossiers(){
  this.api.getList("Dossier/List").subscribe({
    next: (res) => {
      this.dossiers =res;
      console.log(res);
    },
    error: (err) => {
    },
  });
}
getTasks() {
  this.getTaskByStautsAndAss("inprog", this.userId);
  this.getTaskByStautsAndAss("todo", this.userId);
  this.getTaskByStautsAndAss("done", this.userId);
}
ngOnInit(): void {
  this.id = this.auth.getId()

  this.historySearchForm = this.formBuilder.group({
    keyword: [''],
  });
  this.historydateForm = this.formBuilder.group({
    date: [''],
  });
  this.getTasks()
  this.getDossiers()
}
onSelectTask(event: any) {
  this.apiTask.getListByTask("inprog", this.userId, event.title).subscribe({
    next: (res) => {
      this.inprogress = res;
    },
    error: (err) => {
      alert(err)
    },
  });
  this.apiTask.getListByTask("todo", this.userId, event.title).subscribe({
    next: (res) => {
      this.todo = res;
    },
    error: (err) => {
    },
  });
  this.apiTask.getListByTask("done", this.userId, event.title).subscribe({
    next: (res) => {
      this.done = res;
    },
    error: (err) => {
    },
  });
}
onActionButtonClick(event: any) {
  this.apiTask.getListByDossier("inprog", this.userId, event.id).subscribe({
    next: (res) => {
      this.inprogress = res;
    },
    error: (err) => {
      alert(err)
    },
  });
  this.apiTask.getListByDossier("todo", this.userId, event.id).subscribe({
    next: (res) => {
      this.todo = res;
    },
    error: (err) => {
    },
  });
  this.apiTask.getListByDossier("done", this.userId, event.id).subscribe({
    next: (res) => {
      this.done = res;
    },
    error: (err) => {
    },
  });
}
close(status: string): void {
  console.log(`Dialog result: ${status}`);
  this.opened = false;
  this.openedAssign = false
  this.opened2=false
}
addAssign() {
  this.task.UpdateTaskAssign(this.assignedTask, this.id).subscribe({
    next: (res) => {
      this.getTasks()
      this.openedAssign = false
      console.log(res);
    },
    error: (err) => {
      this.openedAssign = false
      this.getTasks()

    },
  });
}
openAssign(id: any) {
  this.openedAssign = true;
  this.assignedTask = id;
}
}
