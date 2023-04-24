import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.css']
})
export class WelcomeDialogComponent {
  dialogVisible = true;

  closeDialog() {
    this.dialogVisible = false;
  }
  gotoguide(){
    window.open(' Guide','_blank')
  }
}
