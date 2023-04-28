import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard2Component } from 'src/app/Components/Dhashboards/dashboard2/dashboard2.component';
import { DialogProfileComponent } from 'src/app/Components/Dhashboards/profile/dialog-profile/dialog-profile.component';
import { AssignmentListComponent } from 'src/app/Components/Dossier/dossiers/assignment-list/assignment-list.component';
import { AssignmentComponent } from 'src/app/Components/Dossier/dossiers/assignment/assignment.component';
import { DossierListComponent } from 'src/app/Components/Dossier/dossiers/dossier-list/dossier-list.component';
import { StatisticsComponent } from 'src/app/Components/Dossier/dossiers/statistics/statistics.component';
import { DashboardTasksComponent } from 'src/app/Components/Dossier/manageTasks/dashboard-tasks/dashboard-tasks.component';
import { TaskDetailsComponent } from 'src/app/Components/Dossier/manageTasks/task-details/task-details.component';
import { TaskComponent } from 'src/app/Components/Dossier/manageTasks/task/task.component';
import { GuideHomeComponent } from 'src/app/Components/home/guide-home/guide-home.component';
import { HomeComponent } from 'src/app/Components/home/home/home.component';
import { UnassignedTasksComponent } from 'src/app/Components/home/unassigned-tasks/unassigned-tasks.component';

const routes: Routes = [
   
   {path:'',component:Dashboard2Component,
   children:[
    { path: '',   redirectTo: 'Home', pathMatch: 'full' },
    {path:'Home',component: HomeComponent},
    {path:'List',component: DossierListComponent},
    { path: 'ManageTasks',component :TaskComponent},
    { path: 'Profile',component :DialogProfileComponent},
    { path: 'Statistics',component :StatisticsComponent},
    { path: 'UnassignedTasks',component :UnassignedTasksComponent},
    { path: 'List/Details/:id',component :AssignmentComponent},
    { path: 'ManageTasks/Details/:id',component :TaskDetailsComponent},

    {path :'',component:DashboardTasksComponent},
    //{ path: 'Manage',loadChildren:()=>import('../managetask/managetask.module').then((m)=>m.ManagetaskModule)},
   ]},

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
