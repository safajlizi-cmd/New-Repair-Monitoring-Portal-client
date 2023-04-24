import { Component, OnInit } from '@angular/core';
import { ActionsLayout, Orientation } from '@progress/kendo-angular-layout';
import { WelcomeDialogComponent } from './Components/Dhashboards/welcome-dialog/welcome-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'ClientS';
  constructor() {}

 
  ngOnInit(): void {
  }
}
