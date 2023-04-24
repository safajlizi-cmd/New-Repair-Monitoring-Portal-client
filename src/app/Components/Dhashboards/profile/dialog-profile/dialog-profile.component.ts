import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { Route} from "@angular/router";
import { pencilIcon } from '@progress/kendo-svg-icons';
import { PasswordComponent } from '../seetings/password/password.component';



@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.css']
})
export class DialogProfileComponent {
  public icons = { edite:pencilIcon };

  constructor(private router: Router , private dialogService : DialogService) {}
  usernameTrig() {
  }
  passwordTrig() {
    const dialogOptions = {
      title: 'Enter password',
      content: PasswordComponent,
      actions: [
        { text: 'Cancel' },
        { text: 'Save', primary: true, action: () => { /* Save password logic */ } }
      ]
    };
    const dialogRef = this.dialogService.open(dialogOptions); 
    appendTo: document.querySelector('kendo-dialog-container')

  }
}
