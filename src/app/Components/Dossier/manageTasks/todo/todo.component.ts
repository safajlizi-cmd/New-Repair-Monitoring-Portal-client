import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionsLayout, Orientation } from '@progress/kendo-angular-layout';
import { clockIcon, pencilIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';
import { GenericService } from 'src/app/services/generic.service';
import { TaskService } from 'src/app/services/task.service';
import { DialogAnimation, DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialItemClickEvent } from '@progress/kendo-angular-buttons';
import { UserStoreService } from 'src/app/services/user-store.service';
import { NotificationService } from '@progress/kendo-angular-notification';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css','./../../../../../assets/sharedCss/SharedStyle.scss']
})
export class TodoComponent implements OnInit {
 
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
  taskSearchForm!: FormGroup;
  historydateForm!: FormGroup;
  title!:any
  @Input() userId!: any;
  @ViewChild("anchor", { static: false })
  public anchor: ElementRef<HTMLElement> | undefined;
  todo: any = [];
  dossiers: any;
  public margin = { horizontal: -46, vertical: 7 };
  showPopupIndextodo: number = -1;
  showPopupIndexin: number = -1;
  showPopupIndexdo: number = -1;
  public show = false;
  inprogress: any = [];
  done: any = [];
  tasks=[{title :'Manage Work Orders'},{title :'Validate Calculations'},{title :'Create Invoice'},{title :'Upload Required Documents/Photos'},{title :'Send Email'}]
  public actionsOrientation: Orientation = "horizontal";
  public actionsLayout: ActionsLayout = "end";
  public icons = { trash: clockIcon };
  popupService: any;

  constructor(private notificationService :NotificationService,private fb:FormBuilder,private task: TaskService, private auth: UserStoreService, private dialogService: DialogService, private api: GenericService, private apiTask: TaskService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }
  onSubmit() {
    this.api.add("Task/Update", this.taskForm.value).subscribe({
      next: (res) => {
        this.notificationService.show({
          content: 'task added successfully',
          animation: { 
            type:"slide",
            duration:500,
          },
          type: { style: "success" },
        });    
        this.getTasks()
        this.taskForm.reset(); // reset the task object after submitting the form
        this.opened = false;
      },
      error: (err) => {
      },
    });
  }
  onToggleto(index: number) {
    if (this.showPopupIndextodo === index) {
      this.showPopupIndextodo = -1;
    } else {
      this.showPopupIndextodo = index;
    }
  }
  onTogglein(index: number) {
    if (this.showPopupIndexin === index) {
      this.showPopupIndexin = -1;
    } else {
      this.showPopupIndexin = index;
    }
  }
  onToggledo(index: number) {
    if (this.showPopupIndexdo === index) {
      this.showPopupIndexdo = -1;
    } else {
      this.showPopupIndexdo = index;
    }
  }
  updateStatus(id: any, status: any) {
    this.apiTask.UpdateTaskStatus(id, status).subscribe({
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
      this.updateStatus(event.item.data!.id, event.container.id)
    }
  }
  onDelete(i: any) {
   
  }
  getTaskByStautsAndAss(status: any, assign: any) {
    this.apiTask.getListByStatusAndAssy(status, assign).subscribe({
      next: (res) => {
        if (status == "inprog") { this.inprogress = res; }
        else if (status == "todo") { this.todo = res; }
        else if (status == "done") { this.done = res; }
      },
      error: (err) => {
      },
    });
  }

  details(item: any) {
  this.taskId = item.id
  this.title = item.title+"/["+item.taskNumber+"]"

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
    this.taskForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      deadline: [''],
      description: [''],
      emergency: [false, Validators.required]
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
    this.opened = false;
    this.openedAssign = false
    this.opened2=false
    this.showPopupIndextodo = -1;
    this.showPopupIndexin = -1;
    this.showPopupIndexdo = -1;
  }
  onUpdate(i: any) {
    this.taskForm.controls['id'].setValue(i.id);
    this.taskForm.controls['title'].setValue(i.title);
    this.taskForm.controls['deadline'].setValue(i.deadline);
    this.taskForm.controls['description'].setValue(i.description);
    this.taskForm.controls['emergency'].setValue(i.emergency);
    this.opened = true;
    this.showPopupIndextodo = -1;
    this.showPopupIndexin = -1;
    this.showPopupIndexdo = -1;
  }
  openAssign(id: any) {
    this.openedAssign = true;
    this.assignedTask = id;
  }
}
