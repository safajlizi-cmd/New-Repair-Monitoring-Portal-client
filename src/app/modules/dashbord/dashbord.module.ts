import { NgModule } from '@angular/core';
import { SideBar2Component } from '../../Components/Dhashboards/side-bar2/side-bar2.component';
import { HomeComponent } from '../../Components/home/home/home.component';
import {DashboardRoutingModule}from './dashboard-routing.module'
import { DashboardTasksComponent } from 'src/app/Components/Dossier/manageTasks/dashboard-tasks/dashboard-tasks.component';
import { TaskComponent } from 'src/app/Components/Dossier/manageTasks/task/task.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { TaskListComponent} from 'src/app/Components/Dossier/manageTasks/task-list/task-list.component';
import { TaskItemComponent } from 'src/app/Components/Dossier/manageTasks/task-item/task-item.component';
import { CommonModule } from '@angular/common';
import { PagerModule } from '@progress/kendo-angular-pager';
import { AddTaskComponent } from '../../Components/Dossier/manageTasks/add-task/add-task.component';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoComponent } from 'src/app/Components/Dossier/manageTasks/todo/todo.component';
import { ContextMenuModule, MenuModule } from '@progress/kendo-angular-menu';
import { DossierListComponent } from 'src/app/Components/Dossier/dossiers/dossier-list/dossier-list.component';
import { DossierDetailsComponent } from 'src/app/Components/Dossier/dossiers/dossier-details/dossier-details.component';

@NgModule({
  declarations: [
    SideBar2Component,
    HomeComponent,
    DashboardTasksComponent,
    TaskComponent,
    TaskListComponent,
    TaskItemComponent,
    AddTaskComponent,
    TodoComponent,
    DossierListComponent,
    DossierDetailsComponent,

 ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonsModule,
    NavigationModule,
    InputsModule,
    IconsModule,
    PopupModule,
    LayoutModule,
    IndicatorsModule,
    TreeViewModule,
    FormsModule,
    GridModule,
    ListViewModule,
    LabelModule ,
    ReactiveFormsModule,
    DateInputsModule,
    PagerModule,
    DialogModule,
    DialogsModule,
    HttpClientModule,
    DragDropModule,
    MenuModule,
    ContextMenuModule


  ]
  
})
export class DashbordModule { }
