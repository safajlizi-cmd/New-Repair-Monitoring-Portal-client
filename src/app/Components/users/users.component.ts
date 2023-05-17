import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonFillMode } from '@progress/kendo-angular-buttons';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { DossierService } from 'src/app/services/dossier.service';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public opened = false;
  public openedStatus = false
  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor: any = "primary";
  UserForm!: FormGroup;
  Status: any
  public gridData!: any;
  snackbarConfig: MatSnackBarConfig = {
    duration: 3000,
    panelClass: 'my-snackbar',
  };
  public fillMode: ButtonFillMode = "flat";

  constructor(private user: UserStoreService,
    private _snackBar: MatSnackBar,
    private dossierService: DossierService,
    private api: GenericService,
    private router:Router,
    private route :ActivatedRoute,
    private fb: FormBuilder) { }

  addUser() {
    this.UserForm.get('createdById')?.setValue(this.user.getId())
    this.api.add("User/Add", this.UserForm.value).subscribe({
      next: (res) => {
        this.getUsers();
        this.UserForm.reset();
        this.opened = false;
        this._snackBar.open("User  added successfully", '', {
          duration: 3000
        })
      },
      error: (err) => {
        this._snackBar.open("Error while adding new user", '', {
          duration: 3000
        })
      },
    });
  }
  getUsers() {
    this.api.getList("User/List").subscribe({
      next: (res) => {
        this.gridData = res;
        console.log(res);
      },
      error: (err) => {
        this._snackBar.open("Error while getting the dossiers", '', {
          duration: 3000
        })

      },
    });
  }

  viewHistory( id:any)
  {
   this.router.navigate(["History/"+id],  {relativeTo: this.route})
  }

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required],
      role: ['Coordinator'],
      createdById: ['']
    });

    this.getUsers()
  }

  public close(): void { this.opened = false; }
  public open(): void { this.opened = true }

}
