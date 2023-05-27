import { NgModule } from '@angular/core';
import { HomeComponent } from '../../Components/home/home/home.component';
import {DashboardRoutingModule}from './dashboard-routing.module'
import { DashboardTasksComponent } from 'src/app/Components/Dossier/manageTasks/dashboard-tasks/dashboard-tasks.component';
import { TaskComponent } from 'src/app/Components/Dossier/manageTasks/task/task.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { TaskListComponent} from 'src/app/Components/Dossier/manageTasks/task-list/task-list.component';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { GuideHomeComponent } from 'src/app/Components/home/guide-home/guide-home.component';
import { TaskDetailsComponent } from 'src/app/Components/Dossier/manageTasks/task-details/task-details.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { PanelBarModule } from '@progress/kendo-angular-layout';
import { UnassignedTasksComponent } from 'src/app/Components/home/unassigned-tasks/unassigned-tasks.component';
import { WelcomeDialogComponent } from 'src/app/Components/Dhashboards/welcome-dialog/welcome-dialog.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { DialogProfileComponent } from 'src/app/Components/Dhashboards/profile/dialog-profile/dialog-profile.component';
import { PasswordComponent } from 'src/app/Components/Dhashboards/profile/seetings/password/password.component';
import { UsernameComponent } from 'src/app/Components/Dhashboards/profile/seetings/username/username.component';
import { StatisticsComponent } from 'src/app/Components/Dossier/dossiers/statistics/statistics.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { CollaboratorTasksComponent } from 'src/app/Components/Dossier/manageTasks/collaborator-tasks/collaborator-tasks.component';
import { AddDossierComponent } from 'src/app/Components/Dossier/add-dossier/add-dossier.component';
import { AssignmentsComponent } from 'src/app/Components/Dossier/add-dossier/steps/assignments/assignments.component';
import { WORSComponent } from 'src/app/Components/Dossier/add-dossier/steps/wors/wors.component';
import { CreateDossierComponent } from 'src/app/Components/Dossier/add-dossier/steps/create-dossier/create-dossier.component';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ChartsModule } from '@progress/kendo-angular-charts';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Top5ChartComponent } from 'src/app/Components/Dossier/dossiers/statistics/charts/top5-chart/top5-chart.component';
import { TasksChartComponent } from 'src/app/Components/Dossier/dossiers/statistics/charts/tasks-chart/tasks-chart.component';
import { CompletedchartComponent } from 'src/app/Components/Dossier/dossiers/statistics/charts/completedchart/completedchart.component';
import { LowestDossierComponent } from 'src/app/Components/Dossier/dossiers/statistics/charts/lowest-dossier/lowest-dossier.component';
import { UploadsModule } from '@progress/kendo-angular-upload';
import {AddNoteComponent} from  'src/app/Components/Dossier/manageTasks/dialogs/add-note/add-note.component';
import { AddSubTaskComponent } from 'src/app/Components/Dossier/manageTasks/dialogs/add-sub-task/add-sub-task.component';
import { UsersComponent } from 'src/app/Components/users/users.component';
import { MatMenuModule } from '@angular/material/menu';
import { HistoryComponent } from 'src/app/Components/users/history/history.component';
import { EventsComponent } from 'src/app/Components/events/events.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { DosHistoryComponent } from 'src/app/Components/Dossier/dossiers/dos-history/dos-history.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardTasksComponent,
    TaskComponent,
    TaskListComponent,
    AddTaskComponent,
    TodoComponent,
    DossierListComponent,
    DossierDetailsComponent,
    GuideHomeComponent,
    TaskDetailsComponent,
    UnassignedTasksComponent,
    WelcomeDialogComponent,
    DialogProfileComponent,
    UsernameComponent,
    PasswordComponent,
    StatisticsComponent,
    CollaboratorTasksComponent,
    AddDossierComponent,
    CreateDossierComponent,
    AssignmentsComponent,
    WORSComponent,
    Top5ChartComponent,
    TasksChartComponent,
    CompletedchartComponent,
    LowestDossierComponent,
    AddNoteComponent,
    AddSubTaskComponent,
    UsersComponent,
    HistoryComponent,
    EventsComponent,


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
    ContextMenuModule,
    MatGridListModule,
    NotificationModule,
    PanelBarModule,
    TooltipModule,
    DropDownsModule,
    ProgressBarModule,
    MatTreeModule,
    MatIconModule,
    TreeViewModule,
    MatButtonModule,
    MatSnackBarModule,
    UploadsModule,
    ChartsModule,
    MatMenuModule,
    ScheduleModule,
    SchedulerModule

   ],
   providers: [Location,],
})
export class DashbordModule { }
