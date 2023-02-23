import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/Dhashboards/navbar/navbar.component';
import { SideBar1Component } from './Components/Dhashboards/side-bar1/side-bar1.component';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { PopupModule } from "@progress/kendo-angular-popup";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { IconsModule } from "@progress/kendo-angular-icons";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { LoginComponent } from './Components/Login/login/login.component';
import { Dashboard1Component } from './Components/Dhashboards/dashboard1/dashboard1.component';
import { Dashboard2Component } from './Components/Dhashboards/dashboard2/dashboard2.component';
import { SideBar2Component } from './Components/Dhashboards/side-bar2/side-bar2.component';
import { DashboardTasksComponent } from './Components/Dossier/manageTasks/dashboard-tasks/dashboard-tasks.component';
import { TaskComponent } from './Components/Dossier/manageTasks/task/task.component';
import { TodoDComponent } from './Components/Dossier/manageTasks/todo-d/todo-d.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBar1Component,
    LoginComponent,
    Dashboard1Component,
    Dashboard2Component,
    SideBar2Component,
    DashboardTasksComponent,
    TaskComponent,
    TodoDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    NavigationModule,
    InputsModule,
    IconsModule,
    PopupModule,
    LayoutModule,
    IndicatorsModule,
    TreeViewModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
