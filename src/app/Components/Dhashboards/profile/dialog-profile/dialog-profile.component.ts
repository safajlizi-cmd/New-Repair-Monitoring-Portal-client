import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { Route} from "@angular/router";
import { pencilIcon } from '@progress/kendo-svg-icons';
import { UserStoreService } from 'src/app/services/user-store.service';
import { OngoingEventsSettings } from '@progress/kendo-angular-scheduler';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '@progress/kendo-angular-notification';



@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.css']
})
export class DialogProfileComponent implements OnInit {
  public icons = { edite:pencilIcon };
  user:any
  email:any
  id:any
  opened=false
  username :any
  resetPasswordForm!: FormGroup
  constructor(private router: Router ,private notificationService:NotificationService, private fb:FormBuilder, private userService:UserService,private dialogService : DialogService,private auth :UserStoreService) {}
  usernameTrig() {
  }

  ngOnInit(): void {
    this.username = this.auth.getFullNameForStore()
    this.email = this.auth.getEmail()
    this.id = this.auth.getId()
    this.resetPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
}
close()
{ this.opened = false}
open(){
this.opened = true}
passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirm = control.get('confirm');

  if (password!.value !== confirm!.value) {
    confirm!.setErrors({ mustMatch: true });
    return { mustMatch: true };
  } else {
    confirm!.setErrors(null);
    return null;
  }
}

onSubmit() {

  this.userService.UpdatePassword(this.resetPasswordForm.get('password')!.value, this.id)
    .subscribe({
      next: (_) => {
        this.opened = false
        this.notificationService.show({
          content: "Password updated successfully",
          animation: {
            type: "slide",
            duration: 500,
          },
          type: { style: "success" },
        });
      },
      error: (err: HttpErrorResponse) => {
        this.notificationService.show({
          content: "error  while updating password",
          animation: {
            type: "slide",
            duration: 500,
          },
          type: { style: "error" },
        });
      }
    })
}
}
