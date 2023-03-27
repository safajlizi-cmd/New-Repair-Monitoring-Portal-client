import { Component, OnInit, ViewChild , Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogAnimation, DialogCloseResult, DialogRef, DialogService, DialogThemeColor } from '@progress/kendo-angular-dialog';
import { plusIcon } from '@progress/kendo-svg-icons';
import { GenericService } from 'src/app/services/generic.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard-tasks',
  templateUrl: './dashboard-tasks.component.html',
  styleUrls: ['./dashboard-tasks.component.css']
})
export class DashboardTasksComponent implements OnInit{
  public opened = false;
  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor:any= "primary";
  taskForm!: FormGroup;
  public icons = { trash:plusIcon };
  @Output() taskAdded: EventEmitter<any> = new EventEmitter();

  actions: any;
  statuses: any;
  dossiers: any;
  constructor(private fb : FormBuilder , private router : Router , private api :GenericService, private apiTask : TaskService ){

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
  getStatus(){
    this.api.getList("Status/List").subscribe({
      next: (res) => {
        this.statuses =res;
        console.log(res);
      },
      error: (err) => {
      },
    });
  }
  getActions(){
    this.api.getList("Action/List").subscribe({
      next: (res) => {
        this.actions =res;
        console.log(res);
      },
      error: (err) => {
      },
    });
  }
 
  AddTask(){
      this.api.add("Task/Add",this.taskForm.value).subscribe({
      next: (res) => {
        console.log(res);
        alert('task added successfully')
        this.taskAdded.emit();
        console.log(this.taskForm.value); // you can replace this with your own code to add the task to a database or send it to a server
        this.taskForm.reset(); // reset the task object after submitting the form
        this.opened = false;
      },
      error: (err) => {
      },
    });
  }
  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      actionId: ['', Validators.required],
      statusId: ['', Validators.required],
      deadline: ['', Validators.required],
      description: ['', Validators.required],
      dossierId: ['', Validators.required],
      emergency :[false, Validators.required]
    });
  this.getDossiers();
  this.getActions();
  this.getStatus();

  }
  onSubmit() {
    this.AddTask();
   
  }
  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }
  public open(): void {
    this.opened = true;
  }
 
}