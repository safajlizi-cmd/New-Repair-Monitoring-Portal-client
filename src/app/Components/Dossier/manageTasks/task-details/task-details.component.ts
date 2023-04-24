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
  public opened = false;
  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor:any= "primary";
  taskForm!: FormGroup;
 id:any
 task:any
 @Input() TaskId :any;
 subtask :any
 public icons = { trash:clockIcon,trashh:plusIcon ,delete:trashIcon,edite:pencilIcon };
 public margin = { horizontal: -46, vertical: 7 };

 showPopupIndextodo =-1
 getTaskById(id:any){
  this.api.getById("Task/GetById",id).subscribe({
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
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      statusId: [''],
      taskId: [''],
      deadline: [''],
      emergency :[false]
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getTaskById(this.TaskId);
  }
  onToggleto(index: number) {
    if (this.showPopupIndextodo === index) {
      // if the same button is clicked again, hide the popup
      this.showPopupIndextodo = -1;
    } else {
      // show the popup for the clicked button only
      this.showPopupIndextodo = index;
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
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {

    this.opened = true;
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
        this.getTaskById(this.id);
         // you can replace this with your own code to add the task to a database or send it to a server
        this.taskForm.reset(); // reset the task object after submitting the form
        this.opened = false;
      },
      error: (err) => {
        alert('error added successfully')

      },
    });
  }
}
