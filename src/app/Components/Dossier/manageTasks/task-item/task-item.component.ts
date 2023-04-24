import { Component ,Inject,Input, OnInit } from '@angular/core';
import { Product } from '../products';
import { DialogRef } from '@progress/kendo-angular-dialog';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  public id: any;

  constructor(private dialogRef: DialogRef) { }

  ngOnInit() {
  }
}
