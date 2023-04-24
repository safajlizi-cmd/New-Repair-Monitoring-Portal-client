import { Component , Input, OnInit,Inject } from '@angular/core';
import { DialogRef, DialogService } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent  {


  constructor(
    public dialogRef: DialogRef,
  ) {}

 

  close() {
    this.dialogRef.close();
  }
 
}