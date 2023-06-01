import { Component, Input, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { clockIcon, pencilIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';
import { GenericService } from 'src/app/services/generic.service';
import { Location } from '@angular/common';
import { SelectAllCheckboxDirective } from '@progress/kendo-angular-grid';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { DialogService,DialogRef,DialogCloseResult} from "@progress/kendo-angular-dialog";
import { take } from 'rxjs';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit , OnDestroy {
  opened = false;
  openedNo = false;
  openedEmail = false;
  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor: any = "primary";
  taskForm!: FormGroup;
  noteForm!: FormGroup;
  note2Form!: FormGroup;
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
              private location: Location,
              private notificationService :NotificationService,
              private dialogService: DialogService
              ) { }
  
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
      option: ['dossier'],
      optionId: [''],
      optionName: [''],
      dossierId: [''],
    });
    this.note2Form = this.fb.group({
      name: ['', Validators.required],
      message: ['',Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      option: ['dossier'],
      optionName: [''],
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
   
  }
  onUpdate(i: any) {

  }
  public close(status: string): void {
    this.opened = false;
    this.openedNo = false;
    this.openedEmail = false
  }
  public open(status: any): void {
    if (status == 'note') { this.openedNo = true; this.noteForm.reset }
   
    else if( status =='email'){
      this.openedEmail = true
    } else {
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
        this.notificationService.show({
          content: "Subtask added successfully",
          animation: { 
            type:"slide",
            duration:500,
          },
          type: { style: "success" },
        });    
      },
      error: (err) => {
        this._snackBar.open("Error while adding new Sub-task", '', this.snackbarConfig)
        this.opened =false
      },
    });
  }
  onSelected(selected: any) {
    this.option = selected;
  }
  addNote() {
    this.noteForm.get('taskId')?.setValue(this.task.id);
    this.noteForm.get('dossierId')?.setValue(this.task.dossierId);
    if (this.noteForm.get('option')?.value == 'dossier') {
      this.noteForm.get('optionName')?.setValue(this.task.dossierC.dossierNumber);
      this.noteForm.get('optionId')?.setValue(this.task.dossierC.id);
    }
    else if( this.noteForm.get('option')?.value == 'workingOrder')
    {   this.noteForm.get('optionId')?.setValue(this.option.id);
    this.noteForm.get('optionName')?.setValue(this.option.woNumber);
  }
   else{
      this.noteForm.get('optionId')?.setValue(this.option.id);
      this.noteForm.get('optionName')?.setValue(this.option.assignmentNumber);
    }
    this.api.add("Note", this.noteForm.value).subscribe({
      next: (res) => {
        this.getTaskById();
        this.noteForm.reset();
        this.openedNo = false;
        this.notificationService.show({
          content: "Note added successfully",
          animation: { 
            type:"slide",
            duration:500,
          },
          type: { style: "success" },
        });    
      },

      error: (err) => {
        this._snackBar.open("Error while adding new note", '', this.snackbarConfig)
        this.openedNo =false
      },
    });
  }
  public result:any;
     sendEmail(){
      this.note2Form.get('dossierId')?.setValue(this.task.dossierId);
      if (this.note2Form.get('option')?.value == 'dossier') {
        this.note2Form.get('optionName')?.setValue('dossier');
      }
    
      this.api.add("Email", this.note2Form.value).subscribe({
        next: (res) => {     
          this.openedEmail = false;
          this.note2Form.reset();
          this.notificationService.show({
            content: "Email added successfully",
            animation: { 
              type:"slide",
              duration:500,
            },
            type: { style: "success" },
          });    
        },
        error: (err) => {
          this.openedEmail =false
          this.notificationService.show({
            content: "Error while sending Email",
            animation: { 
              type:"slide",
              duration:500,
            },
            type: { style: "error" },
          });    
        },
      });
    }
  }
  

