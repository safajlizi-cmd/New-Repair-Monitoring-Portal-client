import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { clockIcon, pencilIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';
import { GenericService } from 'src/app/services/generic.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  opened = false;
  openedNo =false ;
  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor:any= "primary";
  taskForm!: FormGroup;
  noteForm!: FormGroup;
  notes:any[]=[]
    id:any
  task:any
  @Input() TaskId :any;
  subtask :any
 public icons = { trash:clockIcon,trashh:plusIcon ,delete:trashIcon,edite:pencilIcon };
 public margin = { horizontal: -46, vertical: 7 };
 showPopupIndextodo =-1
 getTaskById(){
  this.api.getById("Task/GetById",this.TaskId).subscribe({
    next: (res) => {
      this.task =res;
      this.subtask =res.subTaskC
     },
    error: (err) => {
      alert("error get Task")
    },
  });
}
constructor(private router :Router, private route : ActivatedRoute , private api :GenericService ,private fb:FormBuilder, private location: Location){}
ngOnInit():void{
    this.getTaskById();
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      statusId: [''],
      taskId: [''],
      deadline: [''],
      emergency :[false]
    });
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      taskId: [''],
      dossierId: [''],
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  onToggleto(index: number) {
    if (this.showPopupIndextodo === index) {
      this.showPopupIndextodo = -1;
    } else {      this.showPopupIndextodo = index;
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
  public close(status: string): void {
    this.opened = false;
    this.openedNo = false;
  }
  public open( status:any): void {
    if(status =='note'){this.openedNo = true; this.noteForm.reset}
    else{
    this.opened = true;}
  }

  public back(){
    this.location.back();
  }
  onSubmit(){
    this.taskForm.get('taskId')?.setValue(this.TaskId);
    this.taskForm.get('statusId')?.setValue(this.task.statusId);
    this.api.add("SubTask/Add",this.taskForm.value).subscribe({
      next: (res) => {
        console.log(res);
        alert('subtask added successfully')
        console.log(this.taskForm.value);
        this.getTaskById();
         // you can replace this with your own code to add the task to a database or send it to a server
        this.taskForm.reset(); // reset the task object after submitting the form
        this.opened = false;
      },
      error: (err) => {
        alert('error added successfully')

      },
    });
  }
  addNote(){
    this.noteForm.get('taskId')?.setValue(this.task.id);
    this.noteForm.get('dossierId')?.setValue(this.task.dossierId);
  }
}
