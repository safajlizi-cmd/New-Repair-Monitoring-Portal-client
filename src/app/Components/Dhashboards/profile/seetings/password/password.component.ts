import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent  implements  OnInit{
  hide = true;
  passwordResetForm!: FormGroup;
  passwordsMatch = true;
  message = '';
  constructor(
    private fb: FormBuilder,
    private api: GenericService,
  ) {
    this.passwordResetForm = this.fb.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      newpasswordconfirm: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  checkConfirm(event: Event) {
    if (
      this.passwordResetForm.value['newpassword'] !==
      this.passwordResetForm.value['newpasswordconfirm']
    )
      this.passwordsMatch = false;
    else this.passwordsMatch = true;
  }
  submit() {
  
  }
}
