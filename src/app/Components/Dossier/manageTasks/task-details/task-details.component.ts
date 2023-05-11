import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { clockIcon, pencilIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';
import { GenericService } from 'src/app/services/generic.service';
import { Location } from '@angular/common';
import { SelectAllCheckboxDirective } from '@progress/kendo-angular-grid';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit , OnDestroy {
  opened = false;
  openedNo = false;
  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor: any = "primary";
  taskForm!: FormGroup;
  noteForm!: FormGroup;
  option: any
  clicked = false
  notes: any[] = []
  id: any
  task: any
  @Input() TaskId: any;
  subtask: any
  subscription :any
  snackbarConfig: MatSnackBarConfig = {
    duration: 3000,
    panelClass: 'my-snackbar',
  };
  public icons = { trash: clockIcon, trashh: plusIcon,
     delete: trashIcon, edite: pencilIcon };
  public margin = { horizontal: -46, vertical: 7 };
  showPopupIndextodo = -1
  assignments: any[] = []
  word: any[] = []

  constructor(private _snackBar: MatSnackBar, 
              private router: Router,
              private route: ActivatedRoute,
              private api: GenericService,
              private fb: FormBuilder, 
              private location: Location) { }
  
  getTaskById() {
   this.subscription = this.api.getById("Task/GetById", this.TaskId).subscribe({
      next: (res) => {
        this.task = res;
        this.subtask = res.subTaskC
        this.notes = res.notes
        this.getAssignments()
      },
      error: (err) => {
        this._snackBar.open("Error while agetting Task", '', this.snackbarConfig)

      },
    });
  }
  getAssignments() {
    this.api.getList("Assignment/List/" + this.task.dossierId).subscribe({
      next: (res) => {
        this.assignments = res;
        this.assignments.forEach((assignment: any) => {
          this.word.push(...assignment.workingOrdersC);
        });
        console.log("this.word");
        console.log(this.word);
      },
      error: (err) => {
        this._snackBar.open("Error get Assignments", '', this.snackbarConfig)
      },
    });
  }

  onPanelBarItemClicked() {
    this.clicked = !this.clicked;
  }
  ngOnInit(): void {
    this.getTaskById();
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      statusId: [''],
      option: ['dossier'],
      optionId: [''],
      optionName: [''],
      taskId: [''],
      deadline: [''],
      emergency: [false]
    });
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      taskId: [''],
      dossierId: [''],
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  } 
   onToggleto(index: number) {
    if (this.showPopupIndextodo === index) {
      this.showPopupIndextodo = -1;
    } else {
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
    this.opened = false;
    this.openedNo = false;
  }
  public open(status: any): void {
    if (status == 'note') { this.openedNo = true; this.noteForm.reset }
    else {
      this.opened = true;
    }
  }

  public back() {
    this.location.back();
  }
  onSubmit() {
    this.taskForm.get('taskId')?.setValue(this.TaskId);
    this.taskForm.get('statusId')?.setValue(this.task.statusId);
    if (this.taskForm.get('option')?.value == 'dossier') {
      this.taskForm.get('optionName')?.setValue(this.task.dossierC.dossierNumber);
      this.taskForm.get('optionId')?.setValue(this.task.dossierC.id);
    }
    else if( this.taskForm.get('option')?.value == 'workingOrder')
    {   this.taskForm.get('optionId')?.setValue(this.option.id);
    this.taskForm.get('optionName')?.setValue(this.option.woNumber);
  }
    else{
      this.taskForm.get('optionId')?.setValue(this.option.id);
      this.taskForm.get('optionName')?.setValue(this.option.assignmentNumber);
    }
    this.api.add("SubTask/Add", this.taskForm.value).subscribe({
      next: (res) => {
        this.getTaskById();
        this.opened = false;
        this.taskForm.reset();
        this._snackBar.open("Subtask added successfully", '', this.snackbarConfig)
      },
      error: (err) => {
        this._snackBar.open("Error while adding new Sub-task", '', this.snackbarConfig)

      },
    });
  }
  onSelected(selected: any) {
    this.option = selected;
  }
  addNote() {
    this.noteForm.get('taskId')?.setValue(this.task.id);
    this.noteForm.get('dossierId')?.setValue(this.task.dossierId);
    this.api.add("Note", this.noteForm.value).subscribe({
      next: (res) => {

        this.getTaskById();
        this.noteForm.reset();
        this.openedNo = false;
        this._snackBar.open("Note added successfully", '', this.snackbarConfig)

      },

      error: (err) => {
        this._snackBar.open("Error while adding new note", '', this.snackbarConfig)
      },
    });
  }
}
